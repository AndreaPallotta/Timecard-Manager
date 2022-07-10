const { signIn, signUp, signOut, getSession } = require('./auth.controller');

const router = require('express').Router();

router.post('/signin', signIn);
router.post('/signup', signUp);
router.post('/signout', signOut);
router.post('/getsession', getSession);

module.exports = router;
