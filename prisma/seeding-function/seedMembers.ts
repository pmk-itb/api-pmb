import { prisma } from '../seed';
import faker from 'faker';
import { Gender } from '@prisma/client';

export async function seedMembers(): Promise<void> {
  console.log(`Start seeding members...`);

  for (let i = 0; i < 9; i++) {
    const data = {
      nim: 13518001 + i,
      tpbNim: 16518001 + i,
      name: faker.name.findName(),
      nickname: faker.name.firstName(),
      majorId: i + 1,
      gender: Gender.MALE,
      birthDate: faker.date.past(),
      year: 2018,
      line: faker.internet.userName(),
      phone: faker.phone.phoneNumber(),
      email: faker.internet.email(),
      currentAddress: faker.address.streetAddress(),
      originProvince: faker.address.cityName(),
      originCity: faker.address.cityName(),
      originAddress: faker.address.cityName(),
      originSchool: faker.company.companyName(),
      currentChurch: faker.company.companyName(),
      originChurch: faker.company.companyName(),
      notes: faker.random.words(),
      parentId: i + 1,
    };
    const member = await prisma.member.create({
      data,
    });
    console.log(`Created member with code: ${member.name}`);
  }
  console.log('Seeding finished');
}
