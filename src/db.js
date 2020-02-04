const mysql = require('mysql');

if (!process.env.DB_URL) {
  throw new Error(`Invalid value "${process.env.DB_URL}" for env variable DB_URL`);
}

const connection = mysql.createConnection(process.env.DB_URL);
connection.connect();

module.exports = connection;
