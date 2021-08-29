import { Router } from 'express';
import { listProvinces } from '../controller/province';
import { getCitiesByProvince } from '../controller/kabupaten';
import { getSchools } from '../controller/school';
import { getChurches } from '../controller/church';

const router = Router();

router.get('/provinces', listProvinces);

router.get('/cities', getCitiesByProvince);

router.get('/schools', getSchools);

router.get('/churches', getChurches);

export default router;
