const { areValidAttributes } = require('../utils/validator');
const { values, messages } = require('../utils/constants');

module.exports = mongoose => {
  return new mongoose.Schema({
    user :{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users'
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
      //  TODO: Change this to a real value
      default: 100,
      required: true
    },
    health: {
      type: Number,
      required: true,
    },
    currentHealth: {
      type: Number,
      required: true,
    },
    mana: {
      type: Number,
      required: true,
    },
    currentMana: {
      type: Number,
      required: true,
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
        message: () => messages.error.INVALID_ATTRIBUTES
      },
      required: true,
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
    }
  });
};
