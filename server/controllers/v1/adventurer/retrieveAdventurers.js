/**
 * @api {GET} /v1/adventurer GET Retrieve adventurers
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
const { tables, selections } = require('../../../utils/constants');

module.exports = async (req, res, next) => {
  let adventurers;
  try {
    adventurers = await findDatabase(
      tables.ADVENTURERS,
      { user: req.user._id },
      selections.ADVENTURER_WITH_SUMMARY_DATE
    );
  } catch (err) {
    return next(err);
  }
  return res.status(200).json({
    data: adventurers,
  });
};
