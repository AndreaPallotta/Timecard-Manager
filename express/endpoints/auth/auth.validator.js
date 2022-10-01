const { body } = require('express-validator');
const validate = require('@validation/validator');

exports.loginValidation = validate([
    body('email', 'Invalid email').isEmail(),
    body('password', 'Invalid password').isStrongPassword({
        minLength: 8,
        minNumbers: 1,
        minLowercase: 1,
        minUppercase: 1,
    }),
]);
