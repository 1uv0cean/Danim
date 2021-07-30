const express = require('express');
const router = express.Router();
const db = require('../config/db');
const dotenv = require('dotenv');
const path = require('path');
var request = require('request');

//create signature2
var CryptoJS = require('crypto-js');

dotenv.config({
  path: path.resolve(
    process.cwd(),
    process.env.NODE_ENV === 'production' ? '.env' : '.env.dev',
  ),
});

router.get('/api', (req, res) => {
  // console.log('detected');
  // res.json({data: 'this is index.'});
  db.query('SELECT * FROM user;', (err, result) => {
    if (!err) {
      res.send(result);
    } else {
      console.log(err);
    }
  });
});

router.post('/api/register', (req, res) => {
  const userName = req.body.userName;
  const userPhone = req.body.userPhone;
  db.query(
    'INSERT INTO user(userName, userPhone) VALUES(?,?)',
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
    'SELECT COUNT(*) FROM user WHERE userPhone = ?',
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

router.post('/api/post/sms', (req, res) => {
  const userPhone = req.body.userPhone;

  const certiNumber = Math.floor(Math.random() * 100000) + 10000;

  var resultCode = 404;

  const date = Date.now().toString();
  const uri = process.env.SERVICE_ID; //서비스 ID
  const secretKey = process.env.NCP_SECRET_KEY; // Secret Key
  const accessKey = process.env.NCP_KEY; //Access Key
  const method = 'POST';
  const space = ' ';
  const newLine = '\n';
  const url = `https://sens.apigw.ntruss.com/sms/v2/services/${uri}/messages`;
  const url2 = `/sms/v2/services/${uri}/messages`;

  const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);

  hmac.update(method);
  hmac.update(space);
  hmac.update(url2);
  hmac.update(newLine);
  hmac.update(date);
  hmac.update(newLine);
  hmac.update(accessKey);

  const hash = hmac.finalize();
  const signature = hash.toString(CryptoJS.enc.Base64);

  request(
    {
      method: method,
      json: true,
      uri: url,
      headers: {
        'Contenc-type': 'application/json; charset=utf-8',
        'x-ncp-iam-access-key': accessKey,
        'x-ncp-apigw-timestamp': date,
        'x-ncp-apigw-signature-v2': signature,
      },
      body: {
        type: 'SMS',
        countryCode: '82',
        from: process.env.PHONE_NUM,
        content: `[DANIM] 회원가입 인증번호 [${certiNumber}] 입니다.`,
        messages: [
          {
            to: `${userPhone}`,
          },
        ],
      },
    },
    function (err, res, html) {
      if (err) {
        console.log(err);
      } else {
        console.log(html);
        console.log('CRTI COUNT : ', certiNumber);
      }
    },
  );

  res.json({
    code: 200,
    certiNumber: certiNumber,
  });
});

router.post('/api/chkDuplicate', (req, res) => {
  const userPhone = req.body.userPhone;
  db.query(
    'SELECT COUNT(*) FROM user WHERE userPhone = ?',
    [userPhone],
    (err, result) => {
      if (!err) {
        if (result[0]['COUNT(*)'] < 1) {
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
