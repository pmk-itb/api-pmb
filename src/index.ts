import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (_req, res) => {
  res.send('Hello world');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
