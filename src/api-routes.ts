import { Router } from 'express';

const router = Router();

router.get('/', function (_req, res) {
  res.send('This is home page');
});

router.get('/about', function (_req, res) {
  res.send('This is about');
});

export = router;
