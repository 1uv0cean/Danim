const mysql = require('mysql');

const db = mysql.createPool({
  host: 'localhost',
  user: 'userName',
  password: 'password',
  database: 'dataabse',
});

module.exports = db;
