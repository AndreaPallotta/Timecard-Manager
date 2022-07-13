const sqlite3 = require('sqlite3');
const Promise = require('bluebird');
const Logger = require('../utils/logger');

class DAO {
  constructor(dbPath) {
    this.db = new sqlite3.Database(dbPath, (err) => {
      if (err) {
        Logger.error(`Error connecting to the database: ${err}`);
      } else {
        Logger.debug('Successfully connected to the database');
      }
    });
  }

  run(query, params = []) {
    return new Promise((resolve, reject) => {
      this.db.run(query, params, (err) => {
        if (err) {
          Logger.error(`Error running query ${sql}: ${err}`);
          reject(err);
        }
        resolve({ id: this.lastID });
      });
    });
  }

  createTable(tableName, fields) {
    const tableFields = fields.map(
      ({ name, type, attr }) => `${name} ${type} ${attr || ''}`
    );
    const query = `CREATE TABLE IF NOT EXISTS ${tableName} (
      ${tableFields.join(', ')}
    )`;
    return this.run(query.trim());
  }

  getFromTable(tableName, fields, whereFields, params) {
    if (fieldNames.length !== params.length) return;
    const whereFieldsString = whereFields.map((field) => `${field}=?`);
    const query = `SELECT ${fields.join()}
    FROM ${tableName}
    ${
      whereFields.length > 0 ? `WHERE ${whereFieldsString.join(' AND ')}` : ''
    }`;

    return this.run(query, params);
  }

  getAllFromTable(tableName, whereFields, params) {
    const whereFieldsString = whereFields.map((field) => `${field}=?`);
    const query = `SELECT *
    FROM ${tableName}
    ${
      whereFields.length > 0 ? `WHERE ${whereFieldsString.join(' AND ')}` : ''
    }`;

    return this.run(query, params);
  }

  insertIntoTable(tableName, fieldNames, params) {
    if (fieldNames.length !== params.length) return;
    const placeholders = Array(fieldNames.length).fill('?');

    const query = `INSERT INTO ${tableName}
      (${fieldNames.join(',')})
      VALUES (${placeholders.join(',')})`;

    return this.run(query.trim(), params);
  }

  updateTable(tableName, setFields, whereFields, params, extra) {
    if (setFields.length + whereFields.length !== params.length) return;
    const setFieldsString = setFields.map((field) => `${field}=?`);
    const whereFieldsString = whereFields.map((field) => `${field}=?`);

    const query = `UPDATE ${tableName}
      SET ${setFieldsString.join()}
      ${
        whereFields.length > 0 ? `WHERE ${whereFieldsString.join(' AND ')}` : ''
      }
      ${extra || ''}
  `;

    return this.run(query.trim(), params);
  }

  deleteFromTable(tableName, whereFields, params) {
    if (whereFields.length !== params.length) return;
    const whereFieldsString = whereFields.map((field) => `${field}=?`);

    const query = `DELETE FROM ${tableName}
    ${
      whereFields.length > 0 ? `WHERE ${whereFieldsString.join(' AND ')}` : ''
    }`;

    return this.run(query.trim(), params);
  }
}

module.exports = DAO;
