import { PrismaClient } from '@prisma/client';
import { seedDepartments } from './seeding-function/seedDepartments';

export const prisma = new PrismaClient();

seedDepartments()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });