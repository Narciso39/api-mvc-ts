import { createPool } from 'mysql2';
import * as dotenv from 'dotenv';
dotenv.config();
const db = createPool({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_NAME,
  database: process.env.DATABASE_NAME,
});

export default db;
