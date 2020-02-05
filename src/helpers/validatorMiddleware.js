const { UNPROCESSABLE_ENTITY } = require('http-status-codes');
const { validationResult } = require('express-validator');

const { HttpError } = require('./error');

/**
 * Middleware 'Validation'
 * Use for checking 'are there validation errors'
 * @param { object } req
 * @param { object } res
 * @param { function } next
 * @throws { HttpError }
 */
module.exports = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError(UNPROCESSABLE_ENTITY, 'Validation error', errors.array());
  }
  next();
};
