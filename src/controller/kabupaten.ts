import { Request, Response } from 'express';
import { getCitiesData } from '../repository/kabupaten';

const getCitiesByProvince = async (req: Request, res: Response): Promise<void> => {
  try {
    const province_id = req.query.province_id as string;
    const data = await getCitiesData(province_id);
    res.status(200).json({ data });
  } catch (error) {
    res.status(404).json({ message: "Province doesn't exist" });
  }
};

export { getCitiesByProvince };
