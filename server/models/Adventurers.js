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
    }
  });
};
