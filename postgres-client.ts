// https://docs.github.com/en/actions/guides/creating-postgresql-service-containers
import { Client } from 'pg';

const pgClient = new Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'password',
  database: 'api-pmb-test',
});

pgClient.connect();
