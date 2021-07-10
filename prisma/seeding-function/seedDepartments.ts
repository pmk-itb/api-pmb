import { prisma } from '../seed';
import { departments } from '../seeding-data/departments';

const deptData = departments;

export async function seedDepartments(): Promise<void> {
  console.log(`Start seeding departments...`);

  for (const d of deptData) {
    const dept = await prisma.department.create({
      data: d,
    });
    console.log(`Created dept with code: ${dept.code}`);
  }
  console.log('Seeding finished');
}
