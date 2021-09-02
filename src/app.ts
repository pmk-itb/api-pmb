import express from 'express';
import { router } from './api-routes';
import cors from 'cors';

const app = express();

// To parse json from the request
app.use(cors());
app.use(express.json());
app.use('/api', router);

export = app;
