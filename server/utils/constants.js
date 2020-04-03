module.exports = {
  messages: {
    error: {
      UNEXPECTED_RUNNING: 'An unexpected error occurred while processing your request.',
    },
  },
  error: {
    name: {
      DOCUMENT_NOT_FOUND_ERROR: 'DocumentNotFoundError',
      VALIDATION_ERROR: 'ValidationError',
      NOT_FOUND: 'NotFoundError',
      INVALID_AUTH: 'InvalidAuthError',
      INVALID_SESSION: 'InvalidSessionError',
    },
    code: {
      UNIQUE_CONSTRAINT: 11000,
    },
  },
  values: {
    cryptography: {
      PASSWORD_KEY: process.env.PASSWORD_KEY,
      TOKEN_KEY: process.env.TOKEN_KEY,
      SESSION_SIGNATURE_KEY: process.env.SESSION_SIGNATURE_KEY,
    },
    cookies: {
      SESSION: 'session',
    },
  },
  endpoints: {
    CREATE_ADVENTURER: '/'
  },
  tables: {
    USERS: 'Users',
  },
  selections: {
    USER_WITH_ONLY_ID_DATA: ['_id'],
    USER_WITH_PROFILE_DATA: ['_id', 'email'],
    USER_WITH_PASSWORD_DATA: ['_id', 'password'],
  },
};
