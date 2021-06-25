import express from 'express';
import api from './api-routes';

const app = express();

app.use('/api', api);

export = app;
