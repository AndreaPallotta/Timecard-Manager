const { login, signUp, signOut, getSession } = require('./auth.controller');

const router = require('express').Router();

router.post('/login', login);
router.post('/signup', signUp);
router.post('/signout', signOut);
router.post('/getsession', getSession);

module.exports = router;
