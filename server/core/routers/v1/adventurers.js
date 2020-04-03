const express = require('express');
const retrieveControllers = require('../../../utils/retrieveControllers');
const retrieveSchemas = require('../../../utils/retrieveSchemas');
const { endpoints } = require('../../../utils/constants');
const userMiddleware = require('../../../middlewares/userMiddleware');

const router = express.Router();

const controllers = retrieveControllers(
  __filename.split('/routers')[1].split('.')[0]
);
const schemas = retrieveSchemas(__filename.split('/routers')[1].split('.')[0]);

router.post(
  endpoints.CREATE_ADVENTURER,
  schemas.createAdventurer,
  userMiddleware,
  controllers.createAdventurer
);
router.get(
  endpoints.RETRIEVE_ADVENTURERS,
  userMiddleware,
  controllers.retrieveAdventurers
);
router.get(
  endpoints.RETRIEVE_ADVENTURER,
  schemas.retrieveAdventurer,
  userMiddleware,
  controllers.retrieveAdventurer
);

module.exports = router;
