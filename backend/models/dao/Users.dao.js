const HTTPError = require('../../utils/HTTPError');
const Logger = require('../../utils/logger');

const tableFields = [
  {
    name: 'id',
    type: 'INTEGER',
    attr: 'PRIMARY KEY AUTOINCREMENT',
  },
  {
    name: 'first_name',
    type: 'TEXT',
  },
  {
    name: 'last_name',
    type: 'TEXT',
  },
  {
    name: 'email',
    type: 'TEXT',
  },
  {
    name: 'password',
    type: 'TEXT',
  },
  {
    name: 'role',
    type: 'TEXT',
  },
  {
    name: 'authToken',
    type: 'TEXT',
  },
  {
    name: 'refreshToken',
    type: 'TEXT',
  },
];

const insertFields = [
  'first_name',
  'last_name',
  'email',
  'password',
  'authToken',
  'refreshToken',
  'role',
];

class UsersDAO {
  constructor(dao) {
    this.dao = dao;
    this.create(dao);
  }

  create() {
    try {
      return this.dao.createTable('users', tableFields);
    } catch (err) {
      Logger.error(`Error creating table 'users': ${err}`);
      return HTTPError.E500();
    }
  }

  get(fields, whereFields, params) {
    return this.dao.getFromTable('users', fields, whereFields, params);
  }

  getAll(whereFields, params) {
    return this.dao.getAllFromTable('users', whereFields, params);
  }

  insert(user) {
    try {
      return this.dao.insertIntoTable('users', insertFields, user.toArray());
    } catch (err) {
      Logger.error(`Error inserting into table 'users': ${err}`);
      return HTTPError.E500();
    }
  }

  update(setFields, whereFields, values, extra) {
    return this.dao.updateTable('users', setFields, whereFields, values, extra);
  }

  delete(whereFields, values) {
    return this.dao.deleteFromTable('users', whereFields, values);
  }

  custom(query, params) {
    return this.dao.run(query, params);
  }
}

module.exports = UsersDAO;
