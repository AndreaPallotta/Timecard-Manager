const express = require('express');
const serveIndex = require('serve-index');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');

const { expressConfig } = require('./utils/env.config');
const errorHandler = require('./utils/errorHandler');
const Logger = require('./utils/logger');
const morganMiddleware = require('./utils/morganConfig');

const devRoutes = require('./endpoints/dev/dev.routes');
const authRoutes = require('./endpoints/auth/auth.routes');

const { HOSTNAME, PORT } = expressConfig;

const app = express();
app.use('/public', express.static('public'));
app.use('/public', serveIndex('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(helmet());
app.use(cors());
app.use(morganMiddleware);
app.use('/dev', devRoutes);
app.use('/auth', authRoutes);

app.options('*', (_, res) => {
  res.send(200);
});

app.use(errorHandler);
app.listen(PORT, HOSTNAME, () => {
  Logger.debug(`Server started on ${HOSTNAME || 'localhost'}:${PORT}`);
});
