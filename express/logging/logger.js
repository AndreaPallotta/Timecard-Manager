const winston = require('winston');
const { getLogLevel } = require('@utils/env.config');

const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
};

const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'white',
};

const format = winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    winston.format.colorize({ all: true }),
    winston.format.printf(
        (info) => `${info.timestamp} - ${info.level}: ${info.message}`
    )
);

const transports = [
    new winston.transports.Console(),
    new winston.transports.File({
        filename: 'logs/error.log',
        level: 'error',
        options: { flags: 'w' },
    }),
    new winston.transports.File({
        filename: 'logs/http.log',
        level: 'http',
        options: { flags: 'w' },
    }),
    new winston.transports.File({
        filename: 'logs/all.log',
        options: { flags: 'w' },
    }),
];

winston.addColors(colors);

const Logger = winston.createLogger({
    level: getLogLevel(),
    levels,
    format,
    transports,
});

module.exports = Logger;
