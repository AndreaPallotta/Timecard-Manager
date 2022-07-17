const { validateToken } = require('../../utils/jwt');
const { login, signUp, signOut } = require('./auth.controller');

const router = require('express').Router();

router.post('/login', login);
router.post('/signup', signUp);
router.post('/signout', validateToken, signOut);

module.exports = router;
