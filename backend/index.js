const express = require('express');
const serveIndex = require('serve-index');

const { expressConfig } = require('./utils/env.config');
const Logger = require('./utils/logger');
const morganMiddleware = require('./utils/morganConfig');

const { HOSTNAME, PORT } = expressConfig;

const app = express();
app.use('/public', express.static('public'));
app.use('/public', serveIndex('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morganMiddleware);

app.get('/logger', (_, res) => {
  Logger.error('This is an error log');
  Logger.warn('This is a warn log');
  Logger.info('This is a info log');
  Logger.http('This is a http log');
  Logger.debug('This is a debug log');

  res.send('Hello world');
});

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server Started on ${HOSTNAME || 'localhost'}:${PORT}`);
});
