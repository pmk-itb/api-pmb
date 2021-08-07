import { Request, Response, Router } from 'express';
import { PrismaClient } from '.prisma/client';

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
    year,
    line,
    phone,
    email,
    currentAddress,
    originProvince,
    originAddress,
    originSchool,
    currentChurch,
    originChurch,
    status,
    notes,
    parentName,
    parentPhone,
    parentRelationship,
    discipleshipId,
  } = req.body;

  const createParent = await prisma.parent.create({
    data: {
      name: parentName,
      phone: parentPhone,
      relationship: parentRelationship,
    },
  });

  const upsertDiscipleship = await prisma.discipleship.upsert({
    create: {
      status: 'PENDING',
    },
    update: {},
    where: {
      id: discipleshipId,
    },
  });

  const member = await prisma.member.create({
    data: {
      nim,
      tpbNim: nim,
      name,
      nickname,
      major: { connect: { id: majorId } },
      gender,
      birthDate: birthDate,
      year,
      line,
      phone,
      email,
      currentAddress: currentAddress,
      originProvince: originProvince,
      originAddress: originAddress,
      originSchool: originSchool,
      currentChurch: currentChurch,
      originChurch: originChurch,
      status,
      notes,
      parent: { connect: { id: createParent.id } },
      discipleship: { connect: { id: discipleshipId } },
    },
  });

  res.json({
    createParent,
    upsertDiscipleship,
    member,
  });
});
/**
Test case create Member (JSON):
{
  "nim":13519001,
  "name":"Joko Santoso",
  "nickname":"Joko",
  "majorId":73,
  "gender":"MALE",
  "birthDate":"2000-01-01T00:00:00Z",
  "year":2019,
  "line":"jk",
  "phone":"021500500",
  "email":"a@gmail.com",
  "currentAddress":"Jl. A No. 3",
  "originProvince":"Jakarta",
  "originAddress":"Jl.B No. 15",
  "originSchool":"SMAN 1 Jakarta",
  "currentChurch":"HKBP B",
  "originChurch":"HKBP A",
  "status":"ACTIVE",
  "notes":"-",
  "parentName":"Test Parent",
  "parentPhone":"08111111111",
  "parentRelationship":"AYAH",
  "discipleshipId":1
}
*/

export { router, prisma };
