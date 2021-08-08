import provincesData from '../../../data/provinsi.json';

type ProvinceData = {
  id: string;
  nama: string;
};

const getProvincesData = async (): Promise<ProvinceData[]> => {
  return provincesData;
};

export { getProvincesData };
