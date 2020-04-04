/**
 * @api {GET} /v1/adventurers/selected GET Retrieve adventurer's info
 * @apiName Retrieve Adventurer
 * @apiGroup Adventurer
 * @apiVersion 0.0.1
 *
 * @apiSuccess (200) {String} data Hey.
 * @apiSuccessExample {json} Success-Response:
  {
    "data": [
      {
        "_id": "5e87892efe72b956e9fea5ae",
        "user": "5e8432cddbf3b31f12b91b6d",
        "name": "The best adventurer",
        "level": 1,
        "experience": 0,
        "experienceToNextLevel": 100,
        "health": 100,
        "currentHealth": 100,
        "mana": "100",
        "currentMana": 100,
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
    ]
  }
 */

const findDatabase = require('../../../utils/findDatabase');
const { InvalidId } = require('../../../utils/errors');
const { tables } = require('../../../utils/constants');

module.exports = async (req, res, next) => {
  const id = req.user.selectedAdventurer;
  if (!id) {
    return next(new InvalidId());
  }
  let adventurer;
  try {
    adventurer = await findDatabase(
      tables.ADVENTURERS,
      { _id: id, user: req.user._id },
      [],
      0,
      1
    );
  } catch (err) {
    return next(err);
  }
  return res.status(200).json({
    data: adventurer,
  });
};
