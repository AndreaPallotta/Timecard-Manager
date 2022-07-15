const HTTPError = require('../../utils/HTTPError');
const Model = require('./Model');

const fields = ['firstName', 'lastName', 'email', 'password', 'isAdmin'];

class User {
  constructor(firstName, lastName, email, password, isAdmin = false) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.isAdmin = isAdmin;
  }

  toArray() {
    return [
      this.firstName,
      this.lastName,
      this.email,
      this.password,
      this.isAdmin,
    ];
  }

  static validateJSON(json) {
    if (typeof json !== 'object') return false;
    if (json.isAdmin === undefined) json.isAdmin = false;
    const keys = Object.keys(json);
    return fields.every((field) => keys.includes(field));
  }

  static fromJSON(json) {
    if (!this.validateJSON(json)) {
      return HTTPError.E400(
        undefined,
        'Error creating user: invalid parameters'
      );
    }
    return new User(...Object.values(json));
  }
}

module.exports = User;
