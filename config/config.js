// import * as dotenv from "dotenv";
const dotenv = require("dotenv");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

dotenv.config({ path: `./config/.env.${process.env.NODE_ENV}`, debug: true });
// dotenv.config({ path: `..env.${process.env.NODE_ENV}`, debug: true });

const server = process.env.AZURE_SQL_SERVER;
const database = process.env.AZURE_SQL_DATABASE;
const port = parseInt(process.env.AZURE_SQL_PORT);
const user = process.env.AZURE_SQL_USER;
const password = process.env.AZURE_SQL_PASSWORD;

const config = {
  server,
  port,
  database,
  user,
  password,
  options: {
    encrypt: true,
    database: process.env.AZURE_SQL_DATABASE,
    trustServerCertificate: true, // Use this for Azure SQL
    // instanceName: process.env.SQL_INSTANCE,
  },
};

module.exports = config;