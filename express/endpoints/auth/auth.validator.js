const { body } = require('express-validator');
const validate = require('@validation/validator');

exports.loginValidation = validate([
    body('email', 'Invalid email').isEmail(),
    body('password', 'Invalid password').isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 0,
    }),
]);

exports.signupValidation = validate([
    body('firstName', 'Invalid first name').exists(),
    body('lastName', 'Invalid last name').exists(),
    body('email', 'Invalid email').isEmail(),
    body('password', 'Invalid password').isStrongPassword({
        minLength: 8,
        minNumbers: 1,
        minLowercase: 1,
        minUppercase: 1,
        minSymbols: 0,
    }),
]);

exports.signoutValidation = validate([
    body('email', 'Invalid email').isEmail(),
]);
