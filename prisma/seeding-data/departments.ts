import { Location } from '@prisma/client';

export const departments = [
  {
    code: 'FITB-G',
    name: 'Fakultas Ilmu dan Teknologi Kebumian - Ganesa',
    location: Location.GANESA,
    majors: {
      create: [
        {
          code: 'FITB-G',
          name: 'TPB FITB-G',
          nim_prefix: 163,
        },
        {
          code: 'OS-G',
          name: 'Oseanografi - Ganesa',
          nim_prefix: 129,
        },
        {
          code: 'ME',
          name: 'Meteorologi',
          nim_prefix: 128,
        },
        {
          code: 'GD',
          name: 'Teknik Geodesi & Geomatika',
          nim_prefix: 151,
        },
        {
          code: 'GL',
          name: 'Teknik Geologi',
          nim_prefix: 120,
        },
      ],
    },
  },
  {
    code: 'FITB-C',
    name: 'Fakultas Ilmu dan Teknologi Kebumian - Cirebon',
    location: Location.CIREBON,
    majors: {
      create: [
        {
          code: 'FITB-C',
          name: 'TPB FITB-C',
          nim_prefix: 163,
        },
        {
          code: 'OS-C',
          name: 'Oseanografi - Cirebon',
          nim_prefix: 129,
        },
      ],
    },
  },
  {
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
          code: 'AS',
          name: 'Astronomi',
          nim_prefix: 103,
        },
        {
          code: 'KI',
          name: 'Kimia',
          nim_prefix: 105,
        },
        {
          code: 'AK',
          name: 'Aktuaria',
          nim_prefix: 108,
        },
      ],
    },
  },
  {
    code: 'FSRD-G',
    name: 'Fakultas Seni Rupa dan Desain - Ganesa',
    location: Location.GANESA,
    majors: {
      create: [
        {
          code: 'FSRD-G',
          name: 'TPB FSRD-G',
          nim_prefix: 168,
        },
        {
          code: 'SR',
          name: 'Seni Rupa',
          nim_prefix: 170,
        },
        {
          code: 'KR-G',
          name: 'Kriya - Ganesa',
          nim_prefix: 172,
        },
        {
          code: 'DI',
          name: 'Desain Interior',
          nim_prefix: 173,
        },
        {
          code: 'DK',
          name: 'Desain Komunikasi Visual',
          nim_prefix: 174,
        },
        {
          code: 'DP',
          name: 'Desain Produk',
          nim_prefix: 175,
        },
      ],
    },
  },
  {
    code: 'FSRD-C',
    name: 'Fakultas Seni Rupa dan Desain - Cirebon',
    location: Location.CIREBON,
    majors: {
      create: [
        {
          code: 'FSRD-C',
          name: 'TPB FSRD-C',
          nim_prefix: 168,
        },
        {
          code: 'KR-C',
          name: 'Kriya - Cirebon',
          nim_prefix: 172,
        },
      ],
    },
  },
  {
    code: 'FTI-G',
    name: 'Fakultas Teknologi Industri - Ganesa',
    location: Location.GANESA,
    majors: {
      create: [
        {
          code: 'FTI-G',
          name: 'TPB FTI-G',
          nim_prefix: 167,
        },
        {
          code: 'TK',
          name: 'Teknik Kimia',
          nim_prefix: 130,
        },
        {
          code: 'TF',
          name: 'Teknik Fisika',
          nim_prefix: 133,
        },
        {
          code: 'TI',
          name: 'Teknik Industri',
          nim_prefix: 134,
        },
        {
          code: 'MR',
          name: 'Manajemen Rekayasa',
          nim_prefix: 144,
        },
      ],
    },
  },
  {
    code: 'FTI-J',
    name: 'Fakultas Teknologi Industri - Jatinangor',
    location: Location.JATINANGOR,
    majors: {
      create: [
        {
          code: 'FTI-J',
          name: 'TPB FTI-J',
          nim_prefix: 167,
        },
        {
          code: 'PG',
          name: 'Teknik Pangan',
          nim_prefix: 143,
        },
        {
          code: 'TB',
          name: 'Teknik Bioenergi dan Kemurgi',
          nim_prefix: 145,
        },
      ],
    },
  },
  {
    code: 'FTI-C',
    name: 'Fakultas Teknologi Industri - Cirebon',
    location: Location.CIREBON,
    majors: {
      create: [
        {
          code: 'FTI-C',
          name: 'TPB FTI-C',
          nim_prefix: 167,
        },
        {
          code: 'TI-C',
          name: 'Teknik Industri - Cirebon',
          nim_prefix: 134,
        },
      ],
    },
  },
  {
    code: 'FTMD',
    name: 'Fakultas Teknik Mesin dan Dirgantara',
    location: Location.GANESA,
    majors: {
      create: [
        {
          code: 'FTMD',
          name: 'TPB FTMD',
          nim_prefix: 169,
        },
        {
          code: 'MS',
          name: 'Teknik Mesin',
          nim_prefix: 131,
        },
        {
          code: 'AE',
          name: 'Teknik Dirgantara',
          nim_prefix: 136,
        },
        {
          code: 'MT',
          name: 'Teknik Material',
          nim_prefix: 137,
        },
      ],
    },
  },
  {
    code: 'FTTM-G',
    name: 'Fakultas Teknik Pertambangan dan Perminyakan - Ganesa',
    location: Location.GANESA,
    majors: {
      create: [
        {
          code: 'FTTM-G',
          name: 'TPB FTTM-G',
          nim_prefix: 164,
        },
        {
          code: 'TA-G',
          name: 'Teknik Pertambangan - Ganesa',
          nim_prefix: 121,
        },
        {
          code: 'TM-G',
          name: 'Teknik Perminyakan - Ganesa',
          nim_prefix: 122,
        },
        {
          code: 'TG-G',
          name: 'Teknik Geofisika - Ganesa',
          nim_prefix: 123,
        },
        {
          code: 'MG',
          name: 'Teknik Metalurgi',
          nim_prefix: 125,
        },
      ],
    },
  },
  {
    code: 'FTTM-C',
    name: 'Fakultas Teknik Pertambangan dan Perminyakan - Cirebon',
    location: Location.CIREBON,
    majors: {
      create: [
        {
          code: 'FTTM-C',
          name: 'TPB FTTM-C',
          nim_prefix: 164,
        },
        {
          code: 'TA-C',
          name: 'Teknik Pertambangan - Cirebon',
          nim_prefix: 121,
        },
        {
          code: 'TM-C',
          name: 'Teknik Perminyakan - Cirebon',
          nim_prefix: 122,
        },
        {
          code: 'TG-C',
          name: 'Teknik Geofisika - Cirebon',
          nim_prefix: 123,
        },
      ],
    },
  },
  {
    code: 'FTSL-G',
    name: 'Fakultas Teknik Sipil dan Lingkungan - Ganesa',
    location: Location.GANESA,
    majors: {
      create: [
        {
          code: 'FTSL-G',
          name: 'TPB FTSL-G',
          nim_prefix: 166,
        },
        {
          code: 'SI',
          name: 'Teknik Sipil',
          nim_prefix: 150,
        },
        {
          code: 'TL',
          name: 'Teknik Lingkungan',
          nim_prefix: 153,
        },
        {
          code: 'KL',
          name: 'Teknik Kelautan',
          nim_prefix: 155,
        },
      ],
    },
  },
  {
    code: 'FTSL-J',
    name: 'Fakultas Teknik Sipil dan Lingkungan - Jatinangor',
    location: Location.JATINANGOR,
    majors: {
      create: [
        {
          code: 'FTSL-J',
          name: 'TPB FTSL-J',
          nim_prefix: 166,
        },
        {
          code: 'IL',
          name: 'Rekayasa Infrastruktur Lingkungan',
          nim_prefix: 157,
        },
        {
          code: 'SA',
          name: 'Teknik dan Pengelolaan Sumber Daya Air',
          nim_prefix: 158,
        },
      ],
    },
  },
  {
    code: 'SAPPK-G',
    name: 'Sekolah Arsitektur, Perencanaan dan Pengembangan Kebijakan - Ganesa',
    location: Location.GANESA,
    majors: {
      create: [
        {
          code: 'SAPPK-G',
          name: 'TPB SAPPK-G',
          nim_prefix: 199,
        },
        {
          code: 'AR',
          name: 'Arsitektur',
          nim_prefix: 152,
        },
        {
          code: 'PL-G',
          name: 'Perencanaan Wilayah dan Kota - Ganesa',
          nim_prefix: 154,
        },
      ],
    },
  },
  {
    code: 'SAPPK-C',
    name: 'Sekolah Arsitektur, Perencanaan dan Pengembangan Kebijakan - Cirebon',
    location: Location.CIREBON,
    majors: {
      create: [
        {
          code: 'SAPPK-C',
          name: 'TPB SAPPK-C',
          nim_prefix: 199,
        },
        {
          code: 'PL-C',
          name: 'Perencanaan Wilayah dan Kota - Cirebon',
          nim_prefix: 154,
        },
      ],
    },
  },
  {
    code: 'SBM',
    name: 'Sekolah Bisnis dan Manajemen',
    location: Location.GANESA,
    majors: {
      create: [
        {
          code: 'SBM',
          name: 'TPB SBM',
          nim_prefix: 197,
        },
        {
          code: 'MB',
          name: 'Manajemen',
          nim_prefix: 190,
        },
        {
          code: 'MK',
          name: 'Kewirausahaan',
          nim_prefix: 192,
        },
      ],
    },
  },
  {
    code: 'SF',
    name: 'Sekolah Farmasi',
    location: Location.GANESA,
    majors: {
      create: [
        {
          code: 'SF',
          name: 'TPB SF',
          nim_prefix: 162,
        },
        {
          code: 'FA',
          name: 'Sekolah dan Teknologi Farmasi',
          nim_prefix: 107,
        },
        {
          code: 'FK',
          name: 'Farmasi Klinik dan Komunitas',
          nim_prefix: 116,
        },
      ],
    },
  },
  {
    code: 'SITH-S',
    name: 'Sekolah Ilmu dan Teknologi Hayati - Sains',
    location: Location.GANESA,
    majors: {
      create: [
        {
          code: 'SITH-S',
          name: 'TPB SITH-S',
          nim_prefix: 161,
        },
        {
          code: 'BI',
          name: 'Biologi',
          nim_prefix: 106,
        },
        {
          code: 'BM',
          name: 'Mikrobiologi',
          nim_prefix: 104,
        },
      ],
    },
  },
  {
    code: 'SITH-R',
    name: 'Sekolah Ilmu dan Teknologi Hayati - Rekayasa',
    location: Location.JATINANGOR,
    majors: {
      create: [
        {
          code: 'SITH-R',
          name: 'TPB SITH-R',
          nim_prefix: 161,
        },
        {
          code: 'BE',
          name: 'Rekayasa Hayati',
          nim_prefix: 112,
        },
        {
          code: 'BA',
          name: 'Rekayasa Pertanian',
          nim_prefix: 114,
        },
        {
          code: 'BW',
          name: 'Rekayasa Kehutanan',
          nim_prefix: 115,
        },
        {
          code: 'BP',
          name: 'Teknologi Pasca Panen',
          nim_prefix: 119,
        },
      ],
    },
  },
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
];
