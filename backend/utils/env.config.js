require('dotenv').config({ path: '.env.local' });

const expressConfig = {
  PORT: process.env.PORT || 5000,
  HOSTNAME: process.env.HOST,
};

const logging = {
  LEVEL: process.env.LOG_LEVEL || 'info',
};

exports.expressConfig = expressConfig;
exports.logging = logging;
