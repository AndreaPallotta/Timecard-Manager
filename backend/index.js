const express = require('express');
const serveIndex = require('serve-index');

const { expressConfig } = require('./utils/env.config');

const { HOSTNAME, PORT } = expressConfig;

const app = express();
app.use('/public', express.static('public'));
app.use('/public', serveIndex('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

app.use('/request-type', (req, res, next) => {
  console.log('Request type: ', req.method);
  next();
});

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server Started on ${HOSTNAME || 'localhost'}:${PORT}`);
});
