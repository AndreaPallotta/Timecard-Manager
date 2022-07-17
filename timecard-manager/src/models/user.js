export default class User {
  constructor(
    firstName = '',
    lastName = '',
    email = '',
    password = '',
    role = 'user',
    authToken = '',
    refreshToken = ''
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.role = role;
    this.authToken = authToken;
    this.refreshToken = refreshToken;
  }
}
