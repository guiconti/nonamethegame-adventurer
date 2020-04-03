/**
 * Module to handle errors
 * @module middlewares/errorMiddleware
 */

/**
 * Handle all errors in our app. Must call next(err) on a controller to be used
 *
 */

const logger = require('javascript-custom-logger');
const constants = require('../utils/constants');
// eslint-disable-next-line
module.exports = (err, req, res, next) => {
  switch (err.name) {
    case constants.error.name.VALIDATION_ERROR:
      return res.status(400).json({
        data: err.details[0].message,
      });
    case constants.error.name.INVALID_SESSION:
      return res.status(403).json({
        data: constants.messages.error.UNAUTHORIZED,
      });
    case constants.error.name.INVALID_CLASS:
      return res.status(400).json({
        data: constants.messages.error.INVALID_CLASS,
      });
    case constants.error.name.INVALID_RACE:
      return res.status(400).json({
        data: constants.messages.error.INVALID_RACE,
      });
    case constants.error.name.INVALID_GENDER:
      return res.status(400).json({
        data: constants.messages.error.INVALID_GENDER,
      });
    case constants.error.name.INVALID_ATTRIBUTES:
      return res.status(400).json({
        data: constants.messages.error.INVALID_ATTRIBUTES,
      });
    default:
      break;
  }
  switch (err.code) {
    case constants.error.code.UNIQUE_CONSTRAINT:
      return res.status(409).json({
        data: constants.messages.error.UNIQUE_CONSTRAINT,
      });
    default:
      break;
  }
  switch (err.type) {
    case constants.error.type.PARSING_FAILED:
      return res.status(400).json({
        data: constants.messages.error.INVALID_JSON,
      });
    default:
      break;
  }
  logger.error(err);
  return res.status(500).json({
    data: constants.messages.error.UNEXPECTED_RUNNING,
  });
};
