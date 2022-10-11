const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('@utils/env.config');
const Logger = require('@log/logger');

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
        return res.status(401).json({ error: 'Failed to authenticate user' });
    }
    const token = req.headers?.authorization?.split(' ')?.[1];

    if (!token) {
        Logger.error('401: Failed to authenticate user');
        return res.status(401).json({ error: 'Failed to authenticate user' });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            Logger.error('403: Failed to authenticate user');
            return res
                .status(403)
                .json({ error: 'Failed to authenticate user' });
        }

        if (!user) {
            Logger.error('404: Failed to retrieve user information');
            return res
                .status(403)
                .json({ error: 'Failed to authenticate user' });
        }

        req.user = user;

        next();
    });
};

const validateTokensSafe = (user) => {
    try {
        const tokens = generateBothJWT(user.email);
        if (!user.authToken || !user.refreshToken) {
            user = { ...user, ...tokens };
        } else {
            jwt.verify(user.authToken, JWT_SECRET, (err, user) => {
                if (err || !user) {
                    user = { ...user, tokens };
                }
            });
        }
    } catch {
        return;
    }

    return user;
};

exports.newAuthToken = generateAuthJWT;
exports.newRefreshToken = generateRefreshJWT;
exports.newTokens = generateBothJWT;
exports.validateToken = validateJWT;
exports.validateTokensSafe = validateTokensSafe;
