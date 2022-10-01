const { validateToken } = require('@auth/jwt.js');
const { loginValidation } = require('@routes/auth/auth.validator');
const { login, signUp, signOut } = require('@routes/auth/auth.controller');

const router = require('express').Router();

router.post('/login', loginValidation, login);
router.post('/signup', signUp);
router.post('/signout', validateToken, signOut);

module.exports = router;
