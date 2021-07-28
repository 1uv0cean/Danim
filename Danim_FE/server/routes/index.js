const express = require('express');
const router = express.Router();

router.get('/api', (req, res) => {
  console.log('detected');
  res.json({data: 'this is index.'});
});

module.exports = router;
