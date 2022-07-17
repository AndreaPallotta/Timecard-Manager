const db = require('../../utils/dbManager');
const User = require('../../models/classes/User');
const Logger = require('../../utils/logger');
const HTTPError = require('../../utils/HTTPError');
const { newTokens } = require('../../utils/jwt');
const { isDev } = require('../../utils/env.config');

exports.login = async (req, res, next) => {
  Logger.info(req.body);

  const { email, password } = req.body;

  if (!email || !password) {
    return HTTPError.E404('Email and/or Password invalid.');
  }

  try {
    const { authToken, refreshToken } = newTokens(email);
    if (!authToken || !refreshToken) throw new Error('Failed to generate JWTs');
    const user = new User(
      'Andrea',
      'Pallotta',
      email,
      password,
      authToken,
      refreshToken,
      isDev
    );
    return res.json(user);
  } catch (err) {
    return HTTPError.E400(res, `Error logging in: ${err}`);
  }

  // db.dao.deleteTable('users');

  // console.log(createDB);
  // return res.json({
  //   firstName: 'first name',
  //   lastName: 'last Name',
  //   email: 'email@email.com',
  //   isAdmin: true,
  //   accessToken: '1234567890',
  // });
};

exports.signUp = async (req, res, next) => {};

exports.signOut = async (req, res, next) => {};

exports.getSession = async (req, res, next) => {};
