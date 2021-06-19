import express from 'express';
import * as dotenv from 'dotenv';
import api from './api-routes';
// import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = express();
// const prisma = new PrismaClient();
const port = process.env.PORT;

app.use('/api', api);

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
