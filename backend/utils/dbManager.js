const DAO = require('../models/db');
const UsersDAO = require('../models/dao/Users.dao');
const { DB_PATH } = require('./env.config');
const Logger = require('./logger');

if (!DB_PATH) {
  Logger.error('Database Path not found');
}

const dao = new DAO(DB_PATH);

const db = {
  dao,
  users: new UsersDAO(dao),
};

module.exports = db;
