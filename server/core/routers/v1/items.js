const express = require('express');
const retrieveControllers = require('../../../utils/retrieveControllers');
const retrieveSchemas = require('../../../utils/retrieveSchemas');
const { endpoints } = require('../../../utils/constants');

const router = express.Router();

const controllers = retrieveControllers(
  __filename.split('/routers')[1].split('.')[0]
);
const schemas = retrieveSchemas(__filename.split('/routers')[1].split('.')[0]);

router.get(
  endpoints.RETRIEVE_ADVENTURERS,
  controllers.retrieveItems
);

router.get(
  endpoints.RETRIEVE_ITEM,
  schemas.retrieveItem,
  controllers.retrieveItem
)

module.exports = router;
