import { PrismaClient } from '@prisma/client';
import { departments } from './seeding-data/departments';

const prisma = new PrismaClient();

const deptData = departments;

async function seedDepartments() {
  console.log(`Start seeding...`);

  for (const d of deptData) {
    const dept = await prisma.department.create({
      data: d,
    });
    console.log(`Created dept with code: ${dept.code}`);
  }
  console.log('Seeding finished');
}

seedDepartments()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
