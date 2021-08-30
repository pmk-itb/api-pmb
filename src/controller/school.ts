import { Request, Response } from 'express';
import { getListOfSchools } from '../repository/school';

const getSchools = async (req: Request, res: Response): Promise<void> => {
  try {
    const { city_id } = req.query;
    const data = await getListOfSchools(city_id as string);
    res.status(200).json({ data });
  } catch (error) {
    res.status(404).json({ message: "Location doesn't exist" });
  }
};

export { getSchools };
