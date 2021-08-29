import { getProvincesData } from '../src/repository/provinces/index';
import { getCitiesData } from '../src/repository/kabupaten/index';
import { writeFile } from 'fs/promises';
import path from 'path';
import allChurchesData from '../data/churches/all.json';

export const printAll = async (): Promise<void> => {
  const { default: rawData } = await import('../data/cleaned_churches.json');
  rawData.forEach((value) => {
    console.log(value);
  });
};

const getProvinceByName = async (name: string) => {
  const allProvinces = await getProvincesData();
  return allProvinces.find((province) => {
    return province.nama.toLowerCase() === name.toLowerCase();
  });
};

const getRegencyByName = async (idProvince: string, name: string) => {
  const allRegencies = await getCitiesData(idProvince);
  return allRegencies.find((regency) => {
    return regency.nama.toLowerCase() === name.toLowerCase();
  });
};

export const changeProvinceCode = async (): Promise<
  {
    idProvinsi: string;
    provinsi: string;
    listKabupaten: {
      kabupaten: string;
      gereja: string[];
    }[];
  }[]
> => {
  const { default: rawData } = await import('../data/cleaned_churches.json');

  const newData = await Promise.all(
    rawData.map(async (value) => {
      const province = await getProvinceByName(value.provinsi);
      if (province) {
        console.log(province.id);
        value.idProvinsi = province.id;
      }
      return value;
    }),
  );
  return newData;
};

export const changeAllRegencyCode = async (): Promise<
  {
    idProvinsi: string;
    provinsi: string;
    listKabupaten: {
      kabupaten: string;
      gereja: string[];
    }[];
  }[]
> => {
  const provinceCodeChanged = await changeProvinceCode();

  const newData = await Promise.all(
    provinceCodeChanged.map(async (value) => {
      value.listKabupaten = await changeRegencyCode(value);

      return value;
    }),
  );
  return newData;
};

export const changeRegencyCode = async (province: {
  idProvinsi: string;
  provinsi: string;
  listKabupaten: {
    kabupaten: string;
    gereja: string[];
  }[];
}): Promise<
  {
    kabupaten: string;
    gereja: string[];
  }[]
> => {
  const newData = await Promise.all(
    province.listKabupaten.map(async (value) => {
      const regency = await getRegencyByName(province.idProvinsi, value.kabupaten);
      if (regency) {
        value.kabupaten = regency.id;
      }
      return value;
    }),
  );
  return newData;
};

const writeAll = async () => {
  const newData = [] as {
    id: string;
    churches: string[];
  }[];
  allChurchesData.forEach((value) => {
    value.listKabupaten.forEach((value) => {
      const data = {
        id: value.kabupaten,
        churches: value.gereja,
      };
      newData.push(data);
    });
  });

  await writeFile(path.join(__dirname, '../data/churches/fixed.json'), JSON.stringify(newData), {
    encoding: 'utf-8',
  });
};

writeAll();

// changeAllRegencyCode().then(async (response) => {
//   await writeFile(path.join(__dirname, '../data/churches/all.json'), JSON.stringify(response), {
//     encoding: 'utf-8',
//   });
// });
