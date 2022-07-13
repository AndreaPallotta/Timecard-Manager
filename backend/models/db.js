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

  createTable(tableName, fields) {
    const tableFields = fields.map(
      ({ name, type, attr }, index) =>
        `${name} ${type} ${attr || ''}${index < fields.length - 1 ? ',\n' : ''}`
    );
    const query = `CREATE TABLE IF NOT EXISTS ${tableName} (
      ${tableFields.join(' ')}
    )`;
    return query;
  }

  run(query, params = []) {
    return new Promise((resolve, reject) => {
      this.db.run(sql, params, (err) => {
        if (err) {
          Logger.error(`Error running query ${sql}: ${err}`);
          reject(err);
        }
        resolve({ id: this.lastID });
      });
    });
  }
}

module.exports = DAO;
