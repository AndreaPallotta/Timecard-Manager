const { isDev } = require('../../utils/env.config');
const HTTPError = require('../../utils/HTTPError');

class User {
  constructor(
    firstName,
    lastName,
    email,
    password = '',
    authToken,
    refreshToken,
    role = isDev ? 'developer' : 'user'
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.authToken = authToken;
    this.refreshToken = refreshToken;
    this.role = role;
  }

  toArray() {
    return [
      this.firstName,
      this.lastName,
      this.email,
      this.password,
      this.role,
    ];
  }
}

module.exports = User;
