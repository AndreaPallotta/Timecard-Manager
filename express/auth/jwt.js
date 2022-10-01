const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('@utils/env.config');
const Logger = require('@log/logger');
const HTTPError = require('@errors/HTTPError');

const generateAuthJWT = (email) => {
    if (!JWT_SECRET) {
        Logger.error('Generating JWTs requires Secret');
        return;
    }
    const token = jwt.sign(email, JWT_SECRET);
    Logger.debug(`New auth token generated for ${email}: ${token}`);
    return token;
};

const generateRefreshJWT = (email) => {
    if (!JWT_SECRET) {
        Logger.error('Generating JWTs requires Secret');
        return;
    }
    const token = jwt.sign(email, JWT_SECRET);
    Logger.debug(`New refresh token generated for ${email}: ${token}`);
    return token;
};

const generateBothJWT = (email, time, format) => {
    const authToken = generateAuthJWT(email, time, format);
    const refreshToken = generateRefreshJWT(email);

    if (!authToken || !refreshToken) return;
    return { authToken, refreshToken };
};

const validateJWT = (req, res, next) => {
    if (!JWT_SECRET) {
        Logger.error('Validating JWTs requires Secret');
        return HTTPError.Err(401, 'Failed to authenticate user', res);
    }
    const token = req.headers?.authorization?.split(' ')?.[1];

    if (!token) {
        Logger.error('401: Failed to authenticate user');
        return HTTPError.Err(401, 'Failed to authenticate user', res);
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            Logger.error('403: Failed to authenticate user');
            return HTTPError.Err(403, 'Failed to authenticate user', res);
        }

        if (!user) {
            Logger.error('404: Failed to retrieve user information');
            return HTTPError.Err(
                404,
                'Failed to retrieve user information',
                res
            );
        }

        req.user = user;

        next();
    });
};

exports.newAuthToken = generateAuthJWT;
exports.newRefreshToken = generateRefreshJWT;
exports.newTokens = generateBothJWT;
exports.validateToken = validateJWT;
