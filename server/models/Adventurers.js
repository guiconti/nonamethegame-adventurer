const { areValidAttributes } = require('../utils/validator');
const { values, messages } = require('../utils/constants');

module.exports = (mongoose) => {
  return new mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
      },
      name: {
        type: String,
        unique: true,
        required: true,
      },
      level: {
        type: Number,
        default: 1,
        required: true,
      },
      experience: {
        type: Number,
        default: 0,
        required: true,
      },
      experienceToNextLevel: {
        type: Number,
        default: 100,
        required: true,
      },
      baseHealth: {
        type: Number,
        required: true,
        default: 100,
      },
      currentHealth: {
        type: Number,
        required: true,
        default: 100,
      },
      baseMana: {
        type: Number,
        required: true,
        default: 30,
      },
      currentMana: {
        type: Number,
        required: true,
        default: 30,
      },
      class: {
        type: String,
        enum: values.CLASSES,
        required: true,
      },
      race: {
        type: String,
        enum: values.RACES,
        required: true,
      },
      gender: {
        type: String,
        enum: values.GENDERS,
        required: true,
      },
      attributes: {
        type: Object,
        validate: {
          validator: areValidAttributes,
          message: () => messages.error.INVALID_ATTRIBUTES,
        },
        required: true,
      },
      sightRange: {
        type: Number,
        required: true,
        default: values.DEFAULT_SIGHT_RANGE,
      },
      attackRange: {
        type: Number,
        required: true,
        default: values.DEFAULT_ATTACK_RANGE,
      },
      baseAttack: {
        type: Number,
        required: true,
        default: 0.5,
      },
      baseMagicAttack: {
        type: Number,
        required: true,
        default: 1,
      },
      baseDefense: {
        type: Number,
        required: true,
        default: 1,
      },
      baseMagicDefense: {
        type: Number,
        required: true,
        default: 1,
      },
      baseHit: {
        type: Number,
        required: true,
        default: 1,
      },
      baseFlee: {
        type: Number,
        required: true,
        default: 1,
      },
      baseAttackSpeed: {
        type: Number,
        required: true,
        default: 0.5,
      },
      baseMovementSpeed: {
        type: Number,
        required: true,
        default: 2,
      },
      inventory: {
        type: mongoose.Schema.Inventories,
        required: true,
        default: {
          miscellaneous: {},
          consumable: {},
          equipment: {},
          card: {},
        },
      },
      equipment: {
        type: mongoose.Schema.Equipments,
        required: true,
        default: {
          head: {},
          middleHead: {},
          shoulder: {},
          chest: {},
          rightHand: {},
          leftHand: {},
          feet: {},
          firstAccessory: {},
          secondAccessory: {},
        },
      },
      currentMap: {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Maps',
          default: mongoose.Types.ObjectId(values.STARTING_MAP_ID),
          required: true,
        },
        position: {
          type: Object,
          required: true,
          default: values.STARTING_MAP_POSITION,
        },
      },
      pointsToDistribute: {
        type: Number,
        required: true,
        default: 0,
      },
    },
    { minimize: false }
  );
};
