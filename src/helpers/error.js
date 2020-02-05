/* There are things for working with errors */

const { INTERNAL_SERVER_ERROR } = require('http-status-codes');

/**
 * Class 'ErrorHandler'
 * Use for http errors
 */
class HttpError extends Error {
  /**
   * Constructor 'HttpError'
   * @param { number } statusCode
   * @param { string } message
   */
  constructor(statusCode, message, errors) {
    super();
    this.statusCode = statusCode;
    this.message = message;
    this.errors = errors;
  }
}

/**
 * Middleware for handling errors
 * @param { object } err
 * @param { object } res
 */
// eslint-disable-next-line no-unused-vars
const handleError = (err, req, res, next) => {
  const {
    statusCode = INTERNAL_SERVER_ERROR,
    message,
    errors,
  } = err;
  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message,
    errors,
  });
};


module.exports = {
  HttpError,
  handleError,
};
