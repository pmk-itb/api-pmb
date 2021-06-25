import { Request, Response, Router } from 'express';

const router = Router();

router.get('/', function (_req: Request, res: Response) {
  res.send('This is home page');
});

router.get('/about', function (_req: Request, res: Response) {
  res.send('This is about');
});

export = router;
