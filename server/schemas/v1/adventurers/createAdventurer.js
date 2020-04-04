const joi = require('@hapi/joi');
const { values } = require('../../../utils/constants');

const schema = joi.object().keys({
  name: joi.string().max(values.MAXIMUM_NAME_LENGTH).required(),
  selectedClass: joi.string().required(),
  selectedRace: joi.string().required(),
  selectedGender: joi.string().required(),
  attributes: joi
    .object()
    .keys({
      strength: joi
        .number()
        .integer()
        .min(1)
        .max(values.STARTING_ATTRIBUTE_POINTS + 1)
        .required(),
      intelligence: joi
        .number()
        .integer()
        .min(1)
        .max(values.STARTING_ATTRIBUTE_POINTS + 1)
        .required(),
      agility: joi
        .number()
        .integer()
        .min(1)
        .max(values.STARTING_ATTRIBUTE_POINTS + 1)
        .required(),
      dexterity: joi
        .number()
        .integer()
        .min(1)
        .max(values.STARTING_ATTRIBUTE_POINTS + 1)
        .required(),
      vitality: joi
        .number()
        .integer()
        .min(1)
        .max(values.STARTING_ATTRIBUTE_POINTS + 1)
        .required(),
    })
    .required(),
});

module.exports = (req, res, next) => {
  const { error } = schema.validate(req.body)
  if (!error) {
    return next();
  }
  return next(error);
};
