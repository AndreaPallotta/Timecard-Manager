const { body } = require('express-validator');
const validate = require('@validation/validator');

exports.loginValidation = validate([
    body('email', 'Invalid email').isEmail(),
    body('password', 'Invalid password').isLength({ min: 1 }),
]);
