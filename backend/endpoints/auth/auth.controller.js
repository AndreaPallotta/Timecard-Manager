const db = require('../../utils/dbManager');
const User = require('../../models/classes/User');

exports.login = async (req, res, next) => {
  const user = new User('Andrea', 'pallotta', 'email', 'password');
  // const user = User.fromJSON({
  //   firstName: 'Andrea',
  //   lastName: 'pallotta',
  //   email: 'email',
  //   password: 'password',
  // });
  const inserted = db.users.insert(user)
  console.log(inserted)
  const users = db.users.getAll().then(console.log)

  // db.dao.deleteTable('users');

  // console.log(createDB);
  // return res.json({
  //   firstName: 'first name',
  //   lastName: 'last Name',
  //   email: 'email@email.com',
  //   isAdmin: true,
  //   accessToken: '1234567890',
  // });
  res.json({ user });
};

exports.signUp = async (req, res, next) => {};

exports.signOut = async (req, res, next) => {};

exports.getSession = async (req, res, next) => {};
