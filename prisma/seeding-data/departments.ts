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
          nimPrefix: 163,
        },
        {
          code: 'OS-G',
          name: 'Oseanografi - Ganesa',
          nimPrefix: 129,
        },
        {
          code: 'ME',
          name: 'Meteorologi',
          nimPrefix: 128,
        },
        {
          code: 'GD',
          name: 'Teknik Geodesi & Geomatika',
          nimPrefix: 151,
        },
        {
          code: 'GL',
          name: 'Teknik Geologi',
          nimPrefix: 120,
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
          nimPrefix: 163,
        },
        {
          code: 'OS-C',
          name: 'Oseanografi - Cirebon',
          nimPrefix: 129,
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
          nimPrefix: 160,
        },
        {
          code: 'MA',
          name: 'Matematika',
          nimPrefix: 101,
        },
        {
          code: 'FI',
          name: 'Fisika',
          nimPrefix: 102,
        },
        {
          code: 'AS',
          name: 'Astronomi',
          nimPrefix: 103,
        },
        {
          code: 'KI',
          name: 'Kimia',
          nimPrefix: 105,
        },
        {
          code: 'AK',
          name: 'Aktuaria',
          nimPrefix: 108,
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
          nimPrefix: 168,
        },
        {
          code: 'SR',
          name: 'Seni Rupa',
          nimPrefix: 170,
        },
        {
          code: 'KR-G',
          name: 'Kriya - Ganesa',
          nimPrefix: 172,
        },
        {
          code: 'DI',
          name: 'Desain Interior',
          nimPrefix: 173,
        },
        {
          code: 'DK',
          name: 'Desain Komunikasi Visual',
          nimPrefix: 174,
        },
        {
          code: 'DP',
          name: 'Desain Produk',
          nimPrefix: 175,
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
          nimPrefix: 168,
        },
        {
          code: 'KR-C',
          name: 'Kriya - Cirebon',
          nimPrefix: 172,
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
          nimPrefix: 167,
        },
        {
          code: 'TK',
          name: 'Teknik Kimia',
          nimPrefix: 130,
        },
        {
          code: 'TF',
          name: 'Teknik Fisika',
          nimPrefix: 133,
        },
        {
          code: 'TI',
          name: 'Teknik Industri',
          nimPrefix: 134,
        },
        {
          code: 'MR',
          name: 'Manajemen Rekayasa',
          nimPrefix: 144,
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
          nimPrefix: 167,
        },
        {
          code: 'PG',
          name: 'Teknik Pangan',
          nimPrefix: 143,
        },
        {
          code: 'TB',
          name: 'Teknik Bioenergi dan Kemurgi',
          nimPrefix: 145,
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
          nimPrefix: 167,
        },
        {
          code: 'TI-C',
          name: 'Teknik Industri - Cirebon',
          nimPrefix: 134,
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
          nimPrefix: 169,
        },
        {
          code: 'MS',
          name: 'Teknik Mesin',
          nimPrefix: 131,
        },
        {
          code: 'AE',
          name: 'Teknik Dirgantara',
          nimPrefix: 136,
        },
        {
          code: 'MT',
          name: 'Teknik Material',
          nimPrefix: 137,
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
          nimPrefix: 164,
        },
        {
          code: 'TA-G',
          name: 'Teknik Pertambangan - Ganesa',
          nimPrefix: 121,
        },
        {
          code: 'TM-G',
          name: 'Teknik Perminyakan - Ganesa',
          nimPrefix: 122,
        },
        {
          code: 'TG-G',
          name: 'Teknik Geofisika - Ganesa',
          nimPrefix: 123,
        },
        {
          code: 'MG',
          name: 'Teknik Metalurgi',
          nimPrefix: 125,
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
          nimPrefix: 164,
        },
        {
          code: 'TA-C',
          name: 'Teknik Pertambangan - Cirebon',
          nimPrefix: 121,
        },
        {
          code: 'TM-C',
          name: 'Teknik Perminyakan - Cirebon',
          nimPrefix: 122,
        },
        {
          code: 'TG-C',
          name: 'Teknik Geofisika - Cirebon',
          nimPrefix: 123,
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
          nimPrefix: 166,
        },
        {
          code: 'SI',
          name: 'Teknik Sipil',
          nimPrefix: 150,
        },
        {
          code: 'TL',
          name: 'Teknik Lingkungan',
          nimPrefix: 153,
        },
        {
          code: 'KL',
          name: 'Teknik Kelautan',
          nimPrefix: 155,
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
          nimPrefix: 166,
        },
        {
          code: 'IL',
          name: 'Rekayasa Infrastruktur Lingkungan',
          nimPrefix: 157,
        },
        {
          code: 'SA',
          name: 'Teknik dan Pengelolaan Sumber Daya Air',
          nimPrefix: 158,
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
          nimPrefix: 199,
        },
        {
          code: 'AR',
          name: 'Arsitektur',
          nimPrefix: 152,
        },
        {
          code: 'PL-G',
          name: 'Perencanaan Wilayah dan Kota - Ganesa',
          nimPrefix: 154,
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
          nimPrefix: 199,
        },
        {
          code: 'PL-C',
          name: 'Perencanaan Wilayah dan Kota - Cirebon',
          nimPrefix: 154,
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
          nimPrefix: 197,
        },
        {
          code: 'MB',
          name: 'Manajemen',
          nimPrefix: 190,
        },
        {
          code: 'MK',
          name: 'Kewirausahaan',
          nimPrefix: 192,
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
          nimPrefix: 162,
        },
        {
          code: 'FA',
          name: 'Sekolah dan Teknologi Farmasi',
          nimPrefix: 107,
        },
        {
          code: 'FK',
          name: 'Farmasi Klinik dan Komunitas',
          nimPrefix: 116,
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
          nimPrefix: 161,
        },
        {
          code: 'BI',
          name: 'Biologi',
          nimPrefix: 106,
        },
        {
          code: 'BM',
          name: 'Mikrobiologi',
          nimPrefix: 104,
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
          nimPrefix: 161,
        },
        {
          code: 'BE',
          name: 'Rekayasa Hayati',
          nimPrefix: 112,
        },
        {
          code: 'BA',
          name: 'Rekayasa Pertanian',
          nimPrefix: 114,
        },
        {
          code: 'BW',
          name: 'Rekayasa Kehutanan',
          nimPrefix: 115,
        },
        {
          code: 'BP',
          name: 'Teknologi Pasca Panen',
          nimPrefix: 119,
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
          nimPrefix: 165,
        },
        {
          code: 'EL',
          name: 'Teknik Elektro',
          nimPrefix: 132,
        },
        {
          code: 'IF',
          name: 'Teknik Informatika',
          nimPrefix: 135,
        },
        {
          code: 'EP',
          name: 'Teknik Tenaga Listrik',
          nimPrefix: 180,
        },
        {
          code: 'ET',
          name: 'Teknik Telekomunikasi',
          nimPrefix: 181,
        },
        {
          code: 'II',
          name: 'Sistem dan Teknologi Informasi',
          nimPrefix: 182,
        },
        {
          code: 'EB',
          name: 'Teknik Biomedis',
          nimPrefix: 183,
        },
      ],
    },
  },
];
