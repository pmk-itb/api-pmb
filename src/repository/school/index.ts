import schoolData from '../../../data/school.json';

const getListOfSchools = (cityId: string) => {
  return schoolData.dataSekolah?.filter((data) => data.kode_kab_kota === cityId);
};

export { getListOfSchools };
