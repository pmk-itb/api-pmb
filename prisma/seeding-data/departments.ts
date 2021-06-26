import { Location } from '@prisma/client';

export const departments = [
  {
    code: 'STEI',
    name: 'Sekolah Teknik Elektro dan Informatika',
    location: Location.GANESA,
    majors: {
      create: [
        {
          code: 'STEI',
          name: 'TPB STEI',
          nim_prefix: 165,
        },
        {
          code: 'EL',
          name: 'Teknik Elektro',
          nim_prefix: 132,
        },
        {
          code: 'IF',
          name: 'Teknik Informatika',
          nim_prefix: 135,
        },
        {
          code: 'EP',
          name: 'Teknik Tenaga Listrik',
          nim_prefix: 180,
        },
        {
          code: 'ET',
          name: 'Teknik Telekomunikasi',
          nim_prefix: 181,
        },
        {
          code: 'II',
          name: 'Sistem dan Teknologi Informasi',
          nim_prefix: 182,
        },
        {
          code: 'EB',
          name: 'Teknik Biomedis',
          nim_prefix: 183,
        },
      ],
    },
  },
  {
    // FMIPA
    code: 'FMIPA',
    name: 'Fakultas Matematika dan Ilmu Pengetahuan Alam',
    location: Location.GANESA,
    majors: {
      create: [
        {
          code: 'FMIPA',
          name: 'TPB FMIPA',
          nim_prefix: 160,
        },
        {
          code: 'MA',
          name: 'Matematika',
          nim_prefix: 101,
        },
        {
          code: 'FI',
          name: 'Fisika',
          nim_prefix: 102,
        },
        {
          code: 'KI',
          name: 'Kimia',
          nim_prefix: 105,
        },
        {
          code: 'AS',
          name: 'Astronomi',
          nim_prefix: 103,
        },
        {
          code: 'AK',
          name: 'Aktuaria',
          nim_prefix: 108,
        },
      ],
    },
  },
];
