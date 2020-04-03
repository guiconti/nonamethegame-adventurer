const { values } = require('./constants');

/**
 * Validate if the input is a valid JSON
 * @param {string} JSONToValidate - JSON to be validated
 * @return {boolean} - True case the JSON is valid and false if it is not
 *
 */
exports.isValidJSON = JSONToValidate => {
  try {
    JSON.parse(JSONToValidate);
  } catch (err) {
    return false;
  }
  return true;
};

/**
 * Validate if the input is a valid not empty string
 *
 * @param {string} stringToValidate - String to be validated
 * @return {boolean} - True case the string is valid and false if it is not
 */
exports.isValidString = stringToValidate => {
  return (
    typeof stringToValidate === 'string' && stringToValidate.trim().length > 0
  );
};

/**
 * Validate if the input is a valid class
 *
 * @param {string} classToValidate - Class to be validated
 * @return {boolean} - True case the class is valid and false if it is not
 */
exports.isValidClass = classToValidate => {
  return values.CLASSES.includes(classToValidate);
};

/**
 * Validate if the input is a valid race
 *
 * @param {string} raceToValidate - Race to be validated
 * @return {boolean} - True case the race is valid and false if it is not
 */
exports.isValidRace = raceToValidate => {
  return values.RACES.includes(raceToValidate);
};

/**
 * Validate if the input is a valid gender
 *
 * @param {string} genderToValidate - Gender to be validated
 * @return {boolean} - True case the gender is valid and false if it is not
 */
exports.isValidGender = genderToValidate => {
  return values.GENDERS.includes(genderToValidate);
};

/**
 * Validate if the input are valid attributes
 *
 * @param {object} attributesToValidate - Attributes to be validated
 * @return {boolean} - True case the attributes is valid and false if it is not
 */
exports.areValidAttributes = attributesToValidate => {
  let pointsLeft = values.STARTING_ATTRIBUTE_POINTS + values.ATTRIBUTES.length;
  const attributes = Object.keys(attributesToValidate);
  for (let i = 0; i < attributes.length; i++) {
    if (!values.ATTRIBUTES.includes(attributes[i])) {
      return false;
    }
    if (
      attributesToValidate[attributes[i]] < 1 ||
      attributesToValidate[attributes[i]] > values.STARTING_ATTRIBUTE_POINTS + 1
    ) {
      return false;
    }
    pointsLeft -= attributesToValidate[attributes[i]];
    if (pointsLeft < 0) {
      return false;
    }
  }
  return true;
};
