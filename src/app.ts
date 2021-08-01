import express from 'express';
import { router } from './api-routes';

const app = express();

// To parse json from the request
app.use(express.json());
app.use('/api', router);

export = app;
