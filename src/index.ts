import express from 'express';
import * as dotenv from 'dotenv';
import api from './api-routes';

dotenv.config();

const app = express();
const port = process.env.PORT;

// To parse json from the request
app.use(express.json());
app.use('/api', api);

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
