const { mockDeep, mockReset } = require('jest-mock-extended');

const client = require('@root/prisma.client');
const prismaMock = client;

jest.mock('@root/prisma.client', () => mockDeep());

beforeEach(() => {
    mockReset(prismaMock);
});

module.exports = prismaMock;
