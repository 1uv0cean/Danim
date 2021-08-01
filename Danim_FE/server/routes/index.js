const express = require('express');
const router = express.Router();
const db = require('../config/db');
const upload = multer({dest: 'imgUploads/'});

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
  console.log('REQ BODY', req.body);
  const userName = req.body.userName;
  const userPhone = req.body.userPhone;
  const userCertify = `/imgCertification/${req.file.filename}`; // image 경로 만들기

  db.query(
    'INSERT INTO user(userName, userPhone, userCertify) VALUES(?,?,?)',
    [userName, userPhone, userCertify],
    (err, result) => {
      if (!err) {
        res.send({result: 'success'});
      } else {
        res.send({result: 'failed'});
      }
    },
  );
});


//imgUpload
// const multer = require('multer');
// const upload = multer({dest: '../imgCertification'});

// app.post('/api/register', upload.single('image'), (req, res) => {
//   let sql = 'INSERT INTO USER(userName, userPhone, userCertify) VALUES(?, ?, ?)';
//   const userName = req.body.userName;
//   const userPhone = req.body.userPhone;
//   let userCertify = '/imgCertification/' + req.file.filename;
//   let params = [userName, userPhone, userCertify];
//   connection.query(sql, params,
//     (err, rows, fields) => {
//       res.send(rows);
//     })
// })

// router.post('/api/login', (req, res) => {
//   const userPhone = req.body.userPhone;
//   db.query(
//     'SELECT COUNT(*) FROM user WHERE userPhone = ?',
//     [userPhone],
//     (err, result) => {
//       if (!err) {
//         if (result[0]['COUNT(*)'] >= 1) {
//           res.send({result: 'success'});
//         } else {
//           res.send({result: 'failed'});
//         }
//       } else {
//         res.send({result: 'failed'});
//       }
//     },
//   );
// });

// 파일 업로드 라우터
// router.post("/api/imgUpload", upload.single("image"), (req, res, next) => {
//   // const creator_id = req.body.creator_id;
//   // const title = req.body.title;
//   // const content = req.body.content;
//   // const passwd = req.body.passwd;
//   const image = `/imgCertification/${req.file.filename}`; // image 경로 만들기
//   const datas = [image];

//   const sql =
//     "INSERT INTO user(userCertify) values(?, ?, ?)";
//   connection.query(sql, datas, (err, rows) => {
//     if (err) {
//       console.error("err : " + err);
//     } else {
//       console.log("rows: " + JSON.stringify(rows));
//     }
//   });
// });

module.exports = router;
