import { Router } from 'express';
import { listProvinces } from '../controller/province';
import { getCitiesByProvince } from '../controller/kabupaten';

const router = Router();

router.get('/provinces', listProvinces);

router.get('/cities', getCitiesByProvince);

export default router;
