import { PrismaClient } from '@prisma/client';
import Logger from '../logging/logger';

const prisma = new PrismaClient();

const main = async () => {
  await prisma.$connect();
};

main()
  .then(async () => {
    await prisma.$disconnect();
    Logger.debug('Successfully disconnected');
  })
  .catch(async () => {
    Logger.error(`Failed to connect database: ${e}`);
    await prisma.$disconnect();
    process.exit(1);
  });

module.exports = prisma;
