const db = require('../../utils/dbManager');
const User = require('../../models/classes/User');
const Logger = require('../../utils/logger');
const HTTPError = require('../../utils/HTTPError');
const { newTokens } = require('../../utils/jwt');
const { isDev } = require('../../utils/env.config');

exports.login = async (req, res) => {
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
};

exports.signUp = async (req, res) => {};

exports.signOut = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return HTTPError.E400(res, 'Email is empty or invalid. Cannot sign out');
  }

  // TODO: ADD TOKENS TO BLACKLIST

  return res.json({});
};
