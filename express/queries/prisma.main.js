const { PrismaClient } = require('@prisma/client');
const Logger = require('@log/logger');

const prisma = new PrismaClient();

const main = async () => {
    await prisma.$connect();
};

main()
    .then(async () => {
        await prisma.$disconnect();
        Logger.debug('Successfully disconnected');
    })
    .catch(async (e) => {
        Logger.error(`Failed to connect database: ${e}`);
        await prisma.$disconnect();
        process.exit(1);
    });

module.exports = prisma;
