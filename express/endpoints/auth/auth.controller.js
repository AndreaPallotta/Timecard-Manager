const Logger = require('@log/logger');
const { newTokens } = require('@auth/jwt');
const { getUser } = require('@queries/auth.queries');

exports.login = async (req, res) => {
    Logger.info(req.body);

    try {
        const user = await getUser(req.body);

        if (!user) {
            return res
                .status(404)
                .send({ error: 'Email and/or password are wrong' });
        }
        const { authToken, refreshToken } = newTokens(req.body.email);
        if (!authToken || !refreshToken) {
            return res.status(500).send({ error: 'Failed to generate JWTs' });
        }
        return res.json({});
    } catch (err) {
        return res.status(500).send({ error: err.message });
    }
};

exports.signUp = async (req, res) => {
    return res.json({});
};

exports.signOut = async (req, res) => {
    return res.json({});
};
