import { Request, Response } from 'express';
import { getChurchesData } from '../repository/churches';

// const getSchools = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const { city_id } = req.query;
//     const data = await getListOfSchools(city_id as string);
//     res.status(200).json({ data });
//   } catch (error) {
//     res.status(404).json({ message: "Location doesn't exist" });
//   }
// };

// export { getSchools };

const getChurches = async (req: Request, res: Response): Promise<void> => {
  try {
    const { city_id } = req.query;
    const data = await getChurchesData(city_id as string);
    res.status(200).json({ data });
  } catch (error) {
    const data = [] as string[];
    res.status(200).json({ data });
  }
};

export { getChurches };
