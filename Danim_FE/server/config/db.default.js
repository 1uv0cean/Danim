const mysql = require('mysql');

const db = mysql.createPool({
  host: 'localhost',
  user: 'userName',
  password: 'password',
  database: 'database',
});

module.exports = db;
