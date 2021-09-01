import { Request, Response } from 'express';
import { getProvincesData } from '../repository/provinces';

const listProvinces = async (_: Request, res: Response): Promise<void> => {
  try {
    const data = await getProvincesData();
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export { listProvinces };
