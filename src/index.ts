import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import api from './api-routes';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use('/api', api);

app.get('/', (_req: Request, res: Response) => {
  res.send('Welcome to API!');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
