const { Client } = require('pg');

const pgclient = new Client({
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  user: 'postgres',
  password: 'password',
  database: 'api-pmb-test',
});

pgclient.connect();
