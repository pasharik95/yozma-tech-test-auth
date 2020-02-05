const morgan = require('morgan');
const winston = require('winston');
const uuid = require('uuid/v4');
const { INTERNAL_SERVER_ERROR } = require('http-status-codes');

const LEVEL = process.env.LOG_LEVEL || 'debug';
const LOGGER_FORMAT = ':id [:date[iso]] ":method :url" :status :response-time ms';

/* Configure logger */
morgan.token('id', ({ id = uuid() }) => id);

/**
 * Function to configure logger for app
 * @param { object } app - express application
 */
function addLoggerMiddlewares(app) {
  // Don't use stderr stream for responses with
  app.use(morgan(LOGGER_FORMAT, {
    skip: (req, { statusCode }) => statusCode < INTERNAL_SERVER_ERROR,
    stream: process.stderr,
  }));

  app.use(morgan(LOGGER_FORMAT, {
    skip: (req, { statusCode }) => statusCode >= INTERNAL_SERVER_ERROR,
    stream: process.stdout,
  }));
}

function createLogger() {
  return winston.createLogger({
    level: LEVEL,
    format: winston.format.json(),
    defaultMeta: { service: 'auth-service' },
    transports: [
      new winston.transports.Console(),
    ],
  });
}


module.exports = {
  addLoggerMiddlewares,
  logger: createLogger(),
};
