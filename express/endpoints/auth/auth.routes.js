const { validateToken } = require('@auth/jwt.js');
const {
    loginValidation,
    signupValidation,
    signoutValidation,
} = require('@routes/auth/auth.validator');
const { login, signup, signout } = require('@routes/auth/auth.controller');

const router = require('express').Router();

router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);
router.post('/signout', [validateToken, signoutValidation], signout);

module.exports = router;
