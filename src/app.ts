import express from 'express';
import api from './api-routes';

const app = express();

// To parse json from the request
app.use(express.json());
app.use('/api', api);

export = app;
