const Logger = require('@log/logger');
const HTTPError = require('@errors/HTTPError');
const { newTokens } = require('@auth/jwt');
const prisma = require('@root/prisma.client');

exports.login = async (req, res) => {
    Logger.info(req.body);

    const { email, password } = req.body;

    if (!email || !password) {
        return HTTPError.Err(400, 'Email and/or Password invalid.');
    }

    try {
        const { authToken, refreshToken } = newTokens(email);
        if (!authToken || !refreshToken) {
            throw new Error('Failed to generate JWTs');
        }
        const user = await prisma.user.findMany();
        console.log(user);
        return res.json({});
    } catch (err) {
        return HTTPError.Err(res, err);
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
