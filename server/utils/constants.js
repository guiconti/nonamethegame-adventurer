module.exports = {
  messages: {
    error: {
      UNAUTHORIZED: 'You need to sign in to access this feature.',
      INVALID_CLASS: 'The class sent is invalid.',
      INVALID_RACE: 'The race sent is invalid.',
      INVALID_GENDER: 'The gender sent is invalid.',
      INVALID_ATTRIBUTES: 'The attributes sent are invalid.',
      INVALID_ID: 'The id sent is invalid.',
      UNIQUE_CONSTRAINT: 'Data sent is violating a unique constraint.',
      INVALID_JSON: 'Data sent is an invalid json.',
      DOCUMENT_NOT_FOUND: 'No data found.',
      UNEXPECTED_RUNNING:
        'An unexpected error occurred while processing your request.',
    },
  },
  error: {
    name: {
      DOCUMENT_NOT_FOUND_ERROR: 'DocumentNotFoundError',
      VALIDATION_ERROR: 'ValidationError',
      NOT_FOUND: 'NotFoundError',
      INVALID_AUTH: 'InvalidAuthError',
      INVALID_SESSION: 'InvalidSessionError',
      INVALID_CLASS: 'InvalidClass',
      INVALID_RACE: 'InvalidRace',
      INVALID_GENDER: 'InvalidGender',
      INVALID_ATTRIBUTES: 'InvalidAttributes',
      INVALID_ID: 'InvalidId',
    },
    code: {
      UNIQUE_CONSTRAINT: 11000,
    },
    type: {
      PARSING_FAILED: 'entity.parse.failed',
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
    STARTING_ATTRIBUTE_POINTS: 9,
    CLASSES: ['Swordsman', 'Mage', 'Thief'],
    RACES: ['Human', 'Lizard', 'Undead', 'Dwarf', 'Elf'],
    GENDERS: ['Male', 'Female'],
    ATTRIBUTES: [
      'strength',
      'intelligence',
      'agility',
      'dexterity',
      'vitality',
    ],
  },
  endpoints: {
    CREATE_ADVENTURER: '/',
    RETRIEVE_ADVENTURERS: '/',
    RETRIEVE_ADVENTURER: '/:id',
  },
  tables: {
    USERS: 'Users',
    ADVENTURERS: 'Adventurers',
  },
  selections: {
    USER_WITH_ONLY_ID_DATA: ['_id'],
    USER_WITH_PROFILE_DATA: ['_id', 'email'],
    USER_WITH_PASSWORD_DATA: ['_id', 'password'],
    ADVENTURER_WITH_SUMMARY_DATE: ['_id', 'name', 'level', 'class', 'race', 'gender']
  },
};
