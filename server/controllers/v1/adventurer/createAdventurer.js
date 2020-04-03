/**
 * @api {POST} /v1/adventurer POST Create adventurer
 * @apiName Create Adventurer
 * @apiGroup Adventurer
 * @apiVersion 0.0.1
 *
 * @apiParam {String} Name Adventurer's name
 * @apiParam {String} Class Adventurer's class
 * @apiParam {String} Race Adventurer's race
 * @apiParam {String} Gender Adventurer's gender
 * @apiParam {Object} Attributes Adventurer's attributes
 * @apiParamExample {json} Request-example:
 * {
 *     "name": "Supah Milko",
 *     "class": "Mage",
 *     "race": "Dwarf",
 *     "gender": "Female",
 *     "attributes": {
 *        "strength": 1,
 *        "intelligence": 8,
 *        "agility": 2,
 *        "dexterity": 4,
 *        "vitality": 1
 *     }
 * }
 * @apiSuccess (200) {String} data Hey.
 * @apiSuccessExample {json} Success-Response:
  {
    "data": {
        "_id": "5e87892efe72b956e9fea5ae",
        "user": "5e8432cddbf3b31f12b91b6d",
        "name": "The best adventurer",
        "class": "Swordsman",
        "race": "Lizard",
        "gender": "Male",
        "attributes": {
            "strength": 1,
            "intelligence": 1,
            "agility": 4,
            "dexterity": 4,
            "vitality": 4
        },
        "__v": 0
    }
  }
 * @apiError (400) {String} msg Error message.
 * @apiErrorExample {json} Error-Response:
    { "data": "name is missing or is not correctly formatted." }
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
