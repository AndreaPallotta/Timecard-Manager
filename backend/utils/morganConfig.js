const morgan = require('morgan');
const { isDev } = require('./env.config');
const Logger = require('./logger');

const stream = {
  write: (message) => Logger.http(message),
};

const skip = () => {
  return !isDev;
};

const morganMiddleware = morgan(
  ':method :url :status :res[content-length] - :response-time ms',
  { stream, skip }
);

module.exports = morganMiddleware;
