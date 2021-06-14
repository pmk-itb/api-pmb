import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const deptData = [
  {
    code: 165,
    name: 'Sekolah Teknik Elektro dan Informatika',
    majors: {
      create: {
        // nama nama jurusan
      },
    },
  },
  {
    // fakultas lain
  },
];
