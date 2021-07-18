import { Gender } from '@prisma/client';
import faker from 'faker';

const members = [];

for (let i = 0; i < 9; i++) {
  const nim = 13518001 + i;
  const tpbNim = 16518001 + i;
  const name = faker.name.findName();
  const nickname = faker.name.firstName();
  const majorId = i;
  const gender = Gender.MALE;
  const birthDate = new Date(2000, 9, 2);
  const year = 2018;
  const line = faker.internet.userName();
  const phone = faker.phone.phoneNumber();
  const email = faker.internet.email();
  const currentAddress = faker.address.streetAddress();
  const originProvince = faker.address.cityName();
  const originCity = faker.address.cityName();
  const originAddress = faker.address.cityName();
  const originSchool = faker.company.companyName();
  const currentChurch = faker.company.companyName();
  const originChurch = faker.company.companyName();
  const notes = faker.random.words();
  const parentId = i;
  const discipleshipId = i;

  const data = {
    nim,
    tpbNim,
    name,
    nickname,
    majorId,
    gender,
    birthDate,
    year,
    line,
    phone,
    email,
    currentAddress,
    originProvince,
    originCity,
    originAddress,
    originSchool,
    currentChurch,
    originChurch,
    notes,
    parentId,
    discipleshipId,
  };
  members.push(data);
}

console.log(members);
