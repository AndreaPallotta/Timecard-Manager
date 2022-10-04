const Logger = require('@log/logger');
const { newTokens } = require('@auth/jwt');
const { getUser, createUser, removeTokens } = require('@queries/auth.queries');

exports.login = async (req, res) => {
    console.log('body', req.body);
    try {
        let user = await getUser(req.body);

        Logger.debug(`User: ${user}`);

        if (!user) {
            return res
                .status(404)
                .send({ error: 'Email and/or password are wrong' });
        }
        const { authToken, refreshToken } = newTokens(req.body.email);
        if (!authToken || !refreshToken) {
            Logger.error('Failed to generate JWTs');
            return res.status(500).send({ error: 'Failed to generate JWTs' });
        }
        user = { ...user, authToken, refreshToken };
        Logger.debug(`User signed in: ${user}`);
        return res.send(user);
    } catch (err) {
        Logger.error(`Error during signin: ${err.message}`);
        return res.status(500).send({ error: err.message });
    }
};

exports.signup = async (req, res) => {
    try {
        let user = await createUser(req.body);

        const { authToken, refreshToken } = newTokens(req.body.email);
        if (!authToken || !refreshToken) {
            Logger.error('Failed to generate JWTs');
            return res.status(500).send({ error: 'Failed to generate JWTs' });
        }
        user = { ...user, authToken, refreshToken };
        Logger.debug(`User signed in: ${user}`);
        return res.send(user);
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
