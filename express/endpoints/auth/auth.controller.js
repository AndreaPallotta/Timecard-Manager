const Logger = require('@log/logger');
const { newTokens, validateTokensSafe } = require('@auth/jwt');
const { getUser, createUser, removeTokens } = require('@queries/auth.queries');

exports.login = async (req, res) => {
    try {
        let user = await getUser(req.body);

        if (!user) {
            return res
                .status(404)
                .send({ error: 'Email and/or password are wrong' });
        }

        const userWithTokens = validateTokensSafe(user);

        if (!userWithTokens) {
            Logger.error('Failed to generate JWTs');
            return res.status(500).send({ error: 'Failed to generate JWTs' });
        }

        Logger.debug(`User signed in: ${userWithTokens.email}`);
        return res.send(userWithTokens);
    } catch (err) {
        Logger.error(`Error during signin: ${err.message}`);
        return res.status(500).send({ error: err.message });
    }
};

exports.signup = async (req, res) => {
    try {
        const tokens = newTokens(req.body.email);
        if (!tokens.authToken || !tokens.refreshToken) {
            Logger.error('Failed to generate JWTs');
            return res.status(500).send({ error: 'Failed to generate JWTs' });
        }

        const user = await createUser({ ...req.body, ...tokens });

        if (!user) {
            return res.status(404).send({ error: 'Failed to create user' });
        }
    } catch (err) {
        Logger.error(`Error during signup: ${err.message}`);
        return res.status(500).send({ error: err.message });
    }
};

exports.signout = async (req, res) => {
    try {
        await removeTokens(req.body.email);
        return res.send({});
    } catch (err) {
        Logger.error(`Error during signout: ${err.message}`);
        return res.status(500).send({ error: err.message });
    }
};
