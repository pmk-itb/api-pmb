import { Relationship } from '@prisma/client';
import faker from 'faker';
import { prisma } from '../seed';

export async function seedParents(): Promise<void> {
  for (let i = 0; i < 9; i++) {
    const data = {
      phone: faker.phone.phoneNumber(),
      relationship: Relationship.AYAH,
    };
    const parent = await prisma.parent.create({
      data,
    });
    console.log(`Created parent with phone: ${parent.phone}`);
  }
}
