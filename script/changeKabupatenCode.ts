import { readdir, writeFile } from 'fs/promises';
import path from 'path';

const getListOfFiles = (): Promise<string[]> => {
  const dir = path.join(__dirname, '../data/kabupaten');
  return readdir(dir);
};

const getNewId = (oldString: string, newId: string) => {
  const remainingString = oldString.substring(2);
  return [newId, remainingString].join('');
};

const changeProvinceCode = async () => {
  const files = await getListOfFiles();
  files.forEach(async (file) => {
    const filePath = path.join(__dirname, '../data/kabupaten/', file);
    const newId = path.basename(filePath, '.json');
    const { default: citiesData } = await import(filePath);
    const newData = citiesData.map((data: { id: string; nama: string }) => {
      data.id = getNewId(data.id, newId);
      return data;
    });
    writeFile(filePath, JSON.stringify(newData), {
      encoding: 'utf-8',
    });
  });
};

changeProvinceCode();
