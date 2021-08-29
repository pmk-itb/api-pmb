import { getProvincesData } from '../src/repository/provinces/index';
import { getCitiesData } from '../src/repository/kabupaten/index';

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

  rawData.map(async (value) => {
    const province = await getProvinceByName(value.provinsi);
    if (province) {
      console.log(province.id);
      value.idProvinsi = province.id;
    }
  });
  return rawData;
};

export const changeAllRegencyCode = async (): Promise<void> => {
  const provinceCodeChanged = await changeProvinceCode();
  provinceCodeChanged.forEach((value) => {
    changeRegencyCode(value);
  });
  console.log(provinceCodeChanged);
};

export const changeRegencyCode = async (province: {
  idProvinsi: string;
  provinsi: string;
  listKabupaten: {
    kabupaten: string;
    gereja: string[];
  }[];
}): Promise<void> => {
  province.listKabupaten.forEach(async (value) => {
    const regency = await getRegencyByName(province.idProvinsi, value.kabupaten);
    if (regency) {
      value.kabupaten = regency.id;
    }
  });
};

changeAllRegencyCode();
