/**
 * @api {GET} /v1/items/:id GET Retrieve item's info
 * @apiName Retrieve Item
 * @apiGroup Items
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
const { tables } = require('../../../utils/constants');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  let item;
  try {
    item = await findDatabase(
      tables.ITEMS,
      { _id: id },
      [],
      0,
      1
    );
  } catch (err) {
    return next(err);
  }
  return res.status(200).json({
    data: item,
  });
};
