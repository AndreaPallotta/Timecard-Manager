const prisma = require('@root/prisma.client');
const { hashPassword } = require('@utils/hash');

const checkUserExists = async ({ email }) => {
    try {
        const userExists = await prisma.user.count({
            where: { email },
        });
        return userExists > 0;
    } catch {
        throw new Error(`failed to verify if ${email} exists`);
    }
};

const getUser = async ({ email, password }) => {
    try {
        // return await prisma.user.findMany();
        return await prisma.user.findFirst({
            where: { email, password: await hashPassword(password) },
        });
    } catch (err) {
        throw new Error(`failed to retrieve user: ${err.message}.`);
    }
};

const createUser = async (user) => {
    const { email, password } = user;

    try {
        if (await checkUserExists(email)) {
            throw new Error(`${email} already used`);
        }
        user.password = await hashPassword(password);
        return await prisma.user.create({ data: user });
    } catch (err) {
        throw new Error(`failed to create user: ${err.message}.`);
    }
};

module.exports = {
    getUser,
    createUser,
};
