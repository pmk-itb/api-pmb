import provinceData from '../data/provinsi.json';

const newProvinceCode = {
  ACEH: '06',
  SUMATERA_UTARA: '07',
  SUMATERA_BARAT: '08',
  RIAU: '09',
  JAMBI: '10',
  SUMATERA_SELATAN: '11',
  BENGKULU: '26',
  LAMPUNG: '12',
  KEPULAUAN_BANGKA_BELITUNG: '29',
  KEPULAUAN_RIAU: '31',
  DKI_JAKARTA: '01',
  JAWA_BARAT: '02',
  JAWA_TENGAH: '03',
  DAERAH_ISTIMEWA_YOGYAKARTA: '04',
  JAWA_TIMUR: '05',
  BANTEN: '28',
  BALI: '22',
  NUSA_TENGGARA_BARAT: '23',
  NUSA_TENGGARA_TIMUR: '24',
  KALIMANTAN_BARAT: '13',
  KALIMANTAN_TENGAH: '14',
  KALIMANTAN_SELATAN: '15',
  KALIMANTAN_TIMUR: '16',
  KALIMANTAN_UTARA: '34',
  SULAWESI_UTARA: '17',
  SULAWESI_TENGAH: '18',
  SULAWESI_SELATAN: '19',
  SULAWESI_TENGGARA: '20',
  GORONTALO: '30',
  SULAWESI_BARAT: '33',
  MALUKU: '21',
  MALUKU_UTARA: '27',
  PAPUA: '25',
  PAPUA_BARAT: '32',
};

const formattedProvinceName = (provinceName: string) => {
  const newName = provinceName.split(' ').join('_');
  return newName;
};

const changeProvinceCode = () => {
  const newData = provinceData.map((data) => {
    const newName = formattedProvinceName(data.nama);
    const oldId = data.id;
    data.id = newProvinceCode[newName];
    const newId = data.id;
    console.log(`old ID: ${oldId} -> new ID: ${newId}`);
    return data;
  });
  console.log(newData);
};

changeProvinceCode();
