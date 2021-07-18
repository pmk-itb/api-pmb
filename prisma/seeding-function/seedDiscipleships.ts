import { randomInt } from 'crypto';
import { prisma } from '../seed';
import faker from 'faker';

export async function seedDiscipleships(): Promise<void> {
  for (let i = 0; i < 9; i++) {
    const institutionArr = ['LPMI', 'Sion', 'Perkantas', 'Navigators', faker.company.companyName()];
    const data = {
      leaderId: i + 1,
      institution: institutionArr[randomInt(0, 4)],
      startDate: new Date(),
    };
    const discipleship = await prisma.discipleship.create({
      data,
    });
    console.log(`Created discipleship with code: ${discipleship.id}`);
  }
}
