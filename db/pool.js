require("dotenv").config();
const { Pool } = require("pg");

module.exports = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_ROLE_NAME,
  database: process.env.DB_NAME,
  password: process.env.DB_ROLE_PASSWORD,
  port: process.env.DB_PORT,
});
