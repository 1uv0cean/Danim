const mysql = require('mysql');

const db = mysql.createPool({
  host: 'HOST',
  user: 'USER',
  password: 'PASSWORD',
  database: 'DATABASE',
});

module.exports = db;
