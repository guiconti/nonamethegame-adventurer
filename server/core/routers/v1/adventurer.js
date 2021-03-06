const express = require('express');
const retrieveControllers = require('../../../utils/retrieveControllers');
const { endpoints } = require('../../../utils/constants');
const userMiddleware = require('../../../middlewares/userMiddleware');

const router = express.Router();

const controllers = retrieveControllers(
  __filename.split('/routers')[1].split('.')[0]
);

router.get(
  endpoints.RETRIEVE_SELECTED_ADVENTURER,
  userMiddleware,
  controllers.retrieveSelectedAdventurer
);

module.exports = router;
