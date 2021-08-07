import express from 'express';
import * as dotenv from 'dotenv';
import api from './api-routes';
import { PrismaClient } from '@prisma/client';

dotenv.config();

var bodyParser = require('body-parser');

const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT;


// To parse json from the request
// app.use(express.json());
app.use('/api', api);
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});

app.post('/post', async (req, res) => {
  /** Format penamaan elemen di html snake case or camel case? */
  const {
    nim, tpbNim, name, nickname, majorId, gender, birthDate, year,
    line, phone, email, currentAddress, originProvince, originAddress,
    originSchool, currentChurch, originChurch,
    status, notes, parentId, discipleshipId,
  } = req.body;

  const upsertParent = await prisma.parent.upsert({
    create: {},
    update: {},
    where: {
      id: parentId,
    },
  });

  const upsertDiscipleship = await prisma.discipleship.upsert({
    create: {
      status: "PENDING",
    },
    update: {},
    where: {
      id: discipleshipId,
    },
  });

  const member = await prisma.member.create({
    data: {
      nim,
      tpbNim: tpbNim,
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
      parent: { connect: { id: parentId } },
      discipleship: { connect: { id: discipleshipId } },
    },
  });

  res.json({
    upsertParent,
    upsertDiscipleship,
    member,
  });
})

/**
Test case create Member (JSON):
{
  "nim":13519001,
  "tpbNim":16519001,
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
  "parentId":1,
  "discipleshipId":1
}
 */