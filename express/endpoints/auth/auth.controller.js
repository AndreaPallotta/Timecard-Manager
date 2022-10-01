const Logger = require('@log/logger');
const HTTPError = require('@errors/HTTPError');
const { newTokens } = require('@auth/jwt');
const { getUser } = require('@queries/auth.queries');

exports.login = async (req, res) => {
    Logger.info(req.body);

    try {
        const user = await getUser(req.body);

        if (!user) {
            throw new Error('Email and/or password are wrong');
        }
        const { authToken, refreshToken } = newTokens(req.body.email);
        if (!authToken || !refreshToken) {
            throw new Error('Failed to generate JWTs');
        }
        return res.json({});
    } catch (err) {
        HTTPError.Err(res, err);
    }
};

exports.signUp = async (req, res) => {
    const user = req.body;

    if (Object.values(user).some((attr) => !attr)) {
        return HTTPError.E404(res, 'One or more fields are invalid');
    }

    try {
        const { authToken, refreshToken } = newTokens(user.email);
    } catch (err) {
        return HTTPError.E400(res, err);
    }
};

exports.signOut = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return HTTPError.E400(res, 'Cannot logout. Email is empty or invalid');
    }

    // TODO: ADD TOKENS TO BLACKLIST

    return res.json({});
};
