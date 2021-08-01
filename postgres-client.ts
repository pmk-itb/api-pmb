// https://docs.github.com/en/actions/guides/creating-postgresql-service-containers
import { Client } from 'pg';

const pgClient = new Client({
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  user: 'postgres',
  password: 'password',
  database: 'api-pmb-test',
});

pgClient.connect();
