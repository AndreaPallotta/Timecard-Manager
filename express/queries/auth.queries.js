const prisma = require('@root/prisma.client');
const { hashPassword } = require('@utils/hash');
const bcrypt = require('bcrypt');

const checkUserExists = async (email) => {
    try {
        const userExists = await prisma.user.count({
            where: { email },
        });
        return userExists > 0;
    } catch {
        throw new Error(`Failed to verify if ${email} exists`);
    }
};

const getUser = async ({ email, password }) => {
    console.log('gtting user');
    try {
        const user = await prisma.user.findFirst({
            where: { email },
            select: {
                firstName: true,
                lastName: true,
                email: true,
                authToken: true,
                refreshToken: true,
                password: true,
            },
        });
        if (!user) return;

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) return;

        return user;
    } catch (err) {
        throw new Error(`Failed to retrieve user: ${err.message}.`);
    }
};

const createUser = async (user) => {
    try {
        if (await checkUserExists(user.email)) {
            throw new Error('Email already in use');
        }
        const hashedPassword = await hashPassword(user.password);
        return await prisma.user.create({
            data: { ...user, password: hashedPassword },
        });
    } catch (err) {
        throw new Error(`Failed to create user: ${err.message}.`);
    }
};

const removeTokens = async (email) => {
    try {
        await prisma.user.update({
            where: { email },
            data: { authToken: null, refreshToken: null },
        });
    } catch (err) {
        throw new Error(`Failed to remove tokens: ${err.message}.`);
    }
}

module.exports = {
    getUser,
    createUser,
    removeTokens,
};
