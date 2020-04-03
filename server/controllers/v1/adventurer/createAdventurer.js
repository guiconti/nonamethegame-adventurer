/**
 * @api {POST} /v1/adventurer POST Create adventurer
 * @apiName Create Adventurer
 * @apiGroup Adventurer
 * @apiVersion 0.0.1
 *
 * @apiParam {String} Example Example's body string
 * @apiParamExample {json} Request-example:
 * {
 *     "example": "Test"
 * }
 * @apiSuccess (200) {String} data Hey.
 * @apiSuccessExample {json} Success-Response:
    { "data": "Hey!" }
 * @apiError (400) {String} msg Error message.
 * @apiErrorExample {json} Error-Response:
    { "data": "example is missing or is not correctly formatted." }
  *
 */

const insertDatabase = require('../../../utils/insertDatabase');
const updateDatabase = require('../../../utils/updateDatabase');
const {
  isValidClass,
  isValidRace,
  isValidGender,
  areValidAttributes,
} = require('../../../utils/validator');
const {
  InvalidClass,
  InvalidRace,
  InvalidGender,
  InvalidAttributes,
} = require('../../../utils/errors');
const { tables } = require('../../../utils/constants');

module.exports = async (req, res, next) => {
  let { name } = req.body;
  name = name.trim();
  const { selectedClass, selectedRace, selectedGender, attributes } = req.body;

  if (!isValidClass(selectedClass)) {
    return next(new InvalidClass());
  }
  if (!isValidRace(selectedRace)) {
    return next(new InvalidRace());
  }
  if (!isValidGender(selectedGender)) {
    return next(new InvalidGender());
  }
  if (!areValidAttributes(attributes)) {
    return next(new InvalidAttributes());
  }

  const newAdventurer = {
    user: req.user._id,
    name,
    class: selectedClass,
    race: selectedRace,
    gender: selectedGender,
    attributes,
  };
  let createdAdventurer;
  try {
    createdAdventurer = await insertDatabase(tables.ADVENTURERS, newAdventurer);
    await updateDatabase(tables.USERS, createdAdventurer.user, {
      selectedAdventurer: createdAdventurer._id,
    });
  } catch (err) {
    return next(err);
  }
  return res.status(201).json({
    data: createdAdventurer,
  });
};
