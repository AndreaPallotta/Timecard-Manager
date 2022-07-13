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
    name: 'accessToken',
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
  'accessToken',
  'refreshToken',
];

class UsersDAO {
  constructor(dao) {
    this.dao = dao;
  }

  create() {
    return this.dao.createTable('users', tableFields);
  }

  get(fields, whereFields, params) {
    return this.dao.getFromTable('users', fields, whereFields, params);
  }

  getAll(whereFields, params) {
    return this.dao.getAllFromTable('users', whereFields, params);
  }

  insert(...values) {
    return this.dao.insertIntoTable('users', insertFields, [...values]);
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
