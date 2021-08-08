const getCitiesData = async (provinceId: string): Promise<unknown> => {
  const { default: citiesData } = await import(`../../../data/kabupaten/${provinceId}.json`);
  return citiesData;
};

export { getCitiesData };
