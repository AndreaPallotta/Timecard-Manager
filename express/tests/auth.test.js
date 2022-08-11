const app = require('@root/app');
const request = require('supertest')(app);
const { getUser, createUser } = require('../queries/auth.queries');
const prismaMock = require('./setup/singleton');
const { login, signup } = require('./setup/mock.data');

describe('Test Login', () => {
    test('Standalone - query should create and retrieve user', async () => {
        prismaMock.user.create.mockResolvedValue(login);
        prismaMock.user.findUnique.mockResolvedValue(login);

        await expect(getUser(login)).resolves.toEqual(login);
    });
});

describe('Test Signup', () => {
    test('Standalone - query should create user', async () => {
        prismaMock.user.create.mockResolvedValue(signup);

        await expect(createUser(signup)).resolves.toEqual(signup);
    });
});
