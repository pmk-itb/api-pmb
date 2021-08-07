<<<<<<< HEAD
import { PrismaClient } from '@prisma/client';
import { seedDepartments } from './seeding-function/seedDepartments';

export const prisma = new PrismaClient();

seedDepartments()
=======
import { seedDepartments } from './seeding-function/seedDepartments';
import { seedMembers } from './seeding-function/seedMembers';
import { seedParents } from './seeding-function/seedParents';
import { PrismaClient } from '@prisma/client';
import { seedDiscipleships } from './seeding-function/seedDiscipleships';

export const prisma = new PrismaClient();

async function seed() {
  await seedDepartments();
  await seedParents();
  await seedMembers();
  await seedDiscipleships();
  await seedMembers();
}

seed()
>>>>>>> e95248b104d71104ded400fc65cfefff8f2e2b9c
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });