import express from 'express';
import * as dotenv from 'dotenv';
import routeFunc = require('./routes');
// import * as routes from './routes';
// import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = express();
// const prisma = new PrismaClient();
const port = process.env.PORT;
const router = express.Router();
const routes = routeFunc(router);

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
