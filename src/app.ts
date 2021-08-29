import express from 'express';
import { router } from './api-routes';
import cors from 'cors';

const app = express();

// To parse json from the request
app.use(express.json());
app.use('/api', router);
app.use(cors());

export = app;
