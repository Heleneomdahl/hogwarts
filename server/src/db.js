import { Pool } from "pg";
import "dotenv/config";

const pool = new Pool({
  host: process.env.PGHOST, // localhost
  database: process.env.PGDATABASE, // navnet på databasen
  user: process.env.PGUSER, // brugernavnet til databasen
  password: process.env.PGPASSWORD, // adgangskoden til databasen
});

export default pool;
