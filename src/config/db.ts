import { createPool } from "mysql2";
export const db = createPool({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "",
  database: "crud",
});
