import { Request, Response, Router } from 'express';
import { PrismaClient } from '.prisma/client';

const prisma = new PrismaClient();
const router = Router();

router.get('/', function (_req, res) {
  res.send('This is home page');
});

router.get('/about', function (_req, res) {
  res.send('This is about');
});

router.get('/departments', async (_req: Request, res: Response) => {
  const departments = await prisma.department.findMany({
    select: {
      name: true,
      majors: {
        select: {
          name: true,
        },
      },
    },
  });
  res.json(departments);
});

export = router;
