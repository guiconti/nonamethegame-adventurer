const constants = require('./constants');

class NotFound extends Error {
  constructor(...args) {
    super(...args);
    this.name = constants.error.name.NOT_FOUND;
    Error.captureStackTrace(this, NotFound);
  }
}

class InvalidAuth extends Error {
  constructor(...args) {
    super(...args);
    this.name = constants.error.name.INVALID_AUTH;
    Error.captureStackTrace(this, InvalidAuth);
  }
}

class InvalidSession extends Error {
  constructor(...args) {
    super(...args);
    this.name = constants.error.name.INVALID_SESSION;
    Error.captureStackTrace(this, InvalidSession);
  }
}

class InvalidClass extends Error {
  constructor(...args) {
    super(...args);
    this.name = constants.error.name.INVALID_CLASS
    Error.captureStackTrace(this, InvalidClass);
  }
}

class InvalidRace extends Error {
  constructor(...args) {
    super(...args);
    this.name = constants.error.name.INVALID_RACE
    Error.captureStackTrace(this, InvalidRace);
  }
}

class InvalidGender extends Error {
  constructor(...args) {
    super(...args);
    this.name = constants.error.name.INVALID_GENDER
    Error.captureStackTrace(this, InvalidGender);
  }
}

class InvalidAttributes extends Error {
  constructor(...args) {
    super(...args);
    this.name = constants.error.name.INVALID_ATTRIBUTES
    Error.captureStackTrace(this, InvalidAttributes);
  }
}

module.exports = {
  NotFound,
  InvalidAuth,
  InvalidSession,
  InvalidClass,
  InvalidRace,
  InvalidGender,
  InvalidAttributes,
};
