import { Location } from '@prisma/client';

export const departments = [
  {
    code: 'FITB',
    name: 'Fakultas Ilmu dan Teknologi Kebumian',
    majors: {
      create: [
        {
          code: 'FITB',
          name: 'TPB FITB',
          nim_prefix: 163,
        },
        {
          code: 'OS',
          name: 'Oseanografi',
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
    code: 'FSRD',
    name: 'Fakultas Seni Rupa dan Desain',
    majors: {
      create: [
        {
          code: 'FSRD',
          name: 'TPB FSRD',
          nim_prefix: 168,
        },
        {
          code: 'SR',
          name: 'Seni Rupa',
          nim_prefix: 170,
        },
        {
          code: 'KR',
          name: 'Kriya',
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
    code: 'FTI',
    name: 'Fakultas Teknologi Industri',
    majors: {
      create: [
        {
          code: 'FTI',
          name: 'TPB FTI',
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
          code: 'PG',
          name: 'Teknik Pangan',
          nim_prefix: 143,
        },
        {
          code: 'MR',
          name: 'Manajemen Rekayasa',
          nim_prefix: 144,
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
    code: 'FTMD',
    name: 'Fakultas Teknik Mesin dan Dirgantara',
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
    code: 'FTTM',
    name: 'Fakultas Teknik Pertambangan dan Perminyakan',
    majors: {
      create: [
        {
          code: 'FTTM',
          name: 'TPB FTTM',
          nim_prefix: 164,
        },
        {
          code: 'TA',
          name: 'Teknik Pertambangan',
          nim_prefix: 121,
        },
        {
          code: 'TM',
          name: 'Teknik Perminyakan',
          nim_prefix: 122,
        },
        {
          code: 'TG',
          name: 'Teknik Geofisika',
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
    code: 'FTSL',
    name: 'Fakultas Teknik Sipil dan Lingkungan',
    majors: {
      create: [
        {
          code: 'FTSL',
          name: 'TPB FTSL',
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
    code: 'SAPPK',
    name: 'Sekolah Arsitektur, Perencanaan dan Pengembangan Kebijakan',
    majors: {
      create: [
        {
          code: 'SAPPK',
          name: 'TPB SAPPK',
          nim_prefix: 199,
        },
        {
          code: 'AR',
          name: 'Arsitektur',
          nim_prefix: 152,
        },
        {
          code: 'PL',
          name: 'Perencanaan Wilayah dan Kota',
          nim_prefix: 154,
        },
      ],
    },
  },
  {
    code: 'SBM',
    name: 'Sekolah Bisnis dan Manajemen',
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
  /**/
  {
    code: 'STEI',
    name: 'Sekolah Teknik Elektro dan Informatika',
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
