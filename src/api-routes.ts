import { Request, Response, Router } from 'express';
import { PrismaClient, Relationship } from '@prisma/client';

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
  // aliasing with majors which name starts with TPB
  const majors = await prisma.major.findMany({
    select: {
      id: true,
      name: true,
    },
    where: {
      name: {
        startsWith: 'TPB',
      },
    },
  });
  res.json(majors);
});

router.get('/relationships', async (_req: Request, res: Response) => {
  res.json(Object.getOwnPropertyNames(Relationship));
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

// Endpoint to create member
router.post('/members', async (req, res) => {
  /** Format penamaan elemen di html snake case or camel case? */
  const {
    nim,
    name,
    nickname,
    majorId,
    gender,
    birthDate,
    line,
    phone,
    email,
    originProvince,
    originCity,
    originSchool,
    originChurch,
    parentName,
    parentPhone,
    parentRelationship,
    discipleshipId,
  } = req.body;

  const createParent = await prisma.parent.upsert({
    where: {
      phone: parentPhone,
    },
    update: {},
    create: {
      name: parentName,
      phone: parentPhone,
      relationship: parentRelationship,
    },
  });

  try {
    const member = await prisma.member.create({
      data: {
        nim,
        tpbNim: nim,
        name,
        nickname,
        major: { connect: { id: majorId } },
        gender,
        birthDate,
        year: 2021,
        line,
        phone,
        email,
        originProvince,
        originCity,
        originSchool,
        currentChurch: originChurch,
        originChurch,
        parent: { connect: { id: createParent.id } },
        discipleship: { connect: { id: discipleshipId } },
      },
    });
    res.status(201).json({
      message: 'Created a member.',
      data: member,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
});

export { router, prisma };
