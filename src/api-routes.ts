import { Request, Response, Router } from 'express';
import { PrismaClient } from '.prisma/client';
import { store } from './controllers/admin.controller';

const prisma = new PrismaClient();
const router = Router();

router.get('/', function (_req: Request, res: Response) {
  res.send('This is home page');
});

router.get('/about', function (_req: Request, res: Response) {
  res.send('This is about');
});

// Example API to get department
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

// Example API endpoint to create department
router.post('/departments', async (req: Request, res: Response) => {
  console.log(req.body);
  const { code, name, location } = req.body;
  const post = await prisma.department.create({
    data: {
      code,
      name,
      // location will be string at first and then changed to enum automatically
      location,
    },
  });
  res.json(post);
});

router.post('/admin/register', [store]);

router.get('/test', async (_req: Request, res: Response) => {
  // try to plucking all depts
  // const allDepartments = await prisma.department.findMany({});
  // let selectHTML = '<select>';
  // allDepartments.forEach((element) => {
  //   selectHTML += '<option value=' + element.id + '>' + element.name + '</option>';
  // });
  // selectHTML += '</select>';
  // res.send(selectHTML);

  const variable = await prisma.member.findMany({
    where: {
      birthDate: {
        gt: new Date(1999),
      },
    },
    include: {
      major: true,
    },
  });
  res.json(variable);
});

export { router, prisma };
