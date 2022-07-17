const HTTPError = require('../../utils/HTTPError');

class User {
  constructor(
    firstName,
    lastName,
    email,
    password,
    authToken,
    refreshToken,
    isAdmin = false
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.authToken = authToken;
    this.refreshToken = refreshToken;
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
}

module.exports = User;
