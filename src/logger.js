const morgan = require('morgan')
const uuid = require('uuid/v4')
const { INTERNAL_SERVER_ERROR } = require('http-status-codes')

const LOGGER_FORMAT = ':id [:date[iso]] ":method :url" :status :response-time ms'

/* Configure logger */
morgan.token('id', ({ id = uuid() }) => {
  return id
})


/**
 * Function to configure logger for app
 * @param { object } app - express application 
 */
module.exports = app => {
  // Don't use stderr stream for responses with 
  app.use(morgan(LOGGER_FORMAT, {
    skip: (req, { statusCode }) => {
        return statusCode < INTERNAL_SERVER_ERROR
    },
    stream: process.stderr
  }));
  
  app.use(morgan(LOGGER_FORMAT, {
    skip: (req, { statusCode }) => {
        return statusCode >= INTERNAL_SERVER_ERROR
    },
    stream: process.stdout
  }));
}