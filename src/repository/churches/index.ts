import churchData from '../../../data/churches/fixed.json';

type ChurchData = {
  id: string;
  churches: string[];
};

const getChurchesData = async (cityId: string): Promise<ChurchData | undefined> => {
  const churchesData = churchData.find((church) => {
    return church.id === cityId;
  });

  return churchesData;
};

export { getChurchesData };
