import { writeFile } from 'fs/promises';
import path from 'path';
import schoolData from '../data/school.json';

const cleanUp = async () => {
  const newDataSekolah = schoolData.dataSekolah.map((data) => {
    delete data.npsn;
    delete data.alamat_jalan;
    delete data.lintang;
    delete data.bujur;
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
