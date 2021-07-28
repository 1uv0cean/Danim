const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/api', (req, res) => {
  // console.log('detected');
  // res.json({data: 'this is index.'});
  db.query('SELECT * FROM member', (err, result) => {
    if (!err) {
      res.send(result);
    } else {
      console.log(err);
    }
  });
});

router.post('/api/register', (req, res) => {
  console.log('REQ BODY', req.body);
  const userName = req.body.userName;
  const userPhone = req.body.userPhone;
  db.query(
    'INSERT INTO member(userName, userPhone) VALUES(?,?)',
    [userName, userPhone],
    (err, result) => {
      if (!err) {
        res.send({result: 'success'});
      } else {
        res.send({result: 'failed'});
      }
    },
  );
});

router.post('/api/login', (req, res) => {
  const userPhone = req.body.userPhone;
  db.query(
    'SELECT COUNT(*) FROM member WHERE userPhone = ?',
    [userPhone],
    (err, result) => {
      if (!err) {
        if (result[0]['COUNT(*)'] >= 1) {
          res.send({result: 'success'});
        } else {
          res.send({result: 'failed'});
        }
      } else {
        res.send({result: 'failed'});
      }
    },
  );
});

module.exports = router;
