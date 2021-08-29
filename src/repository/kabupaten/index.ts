type RegencyData = {
  id: string;
  nama: string;
};

const getCitiesData = async (provinceId: string): Promise<RegencyData[]> => {
  const { default: citiesData } = await import(`../../../data/kabupaten/${provinceId}.json`);
  return citiesData;
};

export { getCitiesData };
