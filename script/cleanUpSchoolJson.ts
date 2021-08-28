import { writeFile } from 'fs/promises';
import path from 'path';
import schoolData from '../data/school.json';

const cleanUp = async () => {
  console.log(Object.keys(schoolData));
  const newDataSekolah = schoolData.dataSekolah.map((data) => {
    data.kode_prop = data.kode_prop.trim();
    data.kode_kab_kota = data.kode_kab_kota.trim();
    data.kode_kec = data.kode_kec.trim();
    return data;
  });
  const newData = {
    dataSekolah: newDataSekolah,
  };
  await writeFile(path.join(__dirname, '../data/school.json'), JSON.stringify(newData), {
    encoding: 'utf-8',
  });
};

cleanUp();
