require('dotenv').config({ path: '.env.local' });

const { NODE_ENV, PORT, HOST, LOG_LEVEL, SECRET, DB } = process.env;

const isDev = (NODE_ENV || 'development') === 'development';

const logLevels = ['error', 'warn', 'info', 'http', 'debug'];

const expressConfig = {
  PORT: PORT || 5000,
  HOSTNAME: HOST,
};

const getLogLevel = () => {
  if (!LOG_LEVEL || !logLevels.includes(LOG_LEVEL)) {
    return isDev ? 'debug' : 'warn';
  }
  return LOG_LEVEL;
};

exports.isDev = isDev;
exports.expressConfig = expressConfig;
exports.JWT_SECRET = SECRET;
exports.DB_PATH = DB;
exports.getLogLevel = getLogLevel;
