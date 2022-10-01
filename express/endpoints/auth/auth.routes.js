const { validateToken } = require('@auth/jwt.js');
const { loginValidation } = require('@routes/auth/auth.validator');
const { login, signup, signout } = require('@routes/auth/auth.controller');

const router = require('express').Router();

router.post('/login', loginValidation, login);
router.post('/signup', signup);
router.post('/signout', validateToken, signout);

module.exports = router;
