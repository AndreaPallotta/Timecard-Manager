export default class User {
  constructor(
    firstName = '',
    lastName = '',
    email = '',
    password = '',
    isAdmin = false,
    authToken = '',
    refreshToken = ''
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.isAdmin = isAdmin;
    this.authToken = authToken;
    this.refreshToken = refreshToken;
  }
}
