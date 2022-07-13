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
];

class UsersDAO {
  constructor(dao) {
    this.dao = dao;
  }

  createTable() {
    return this.dao.createTable('users', tableFields);
  }
}

module.exports = UsersDAO;
