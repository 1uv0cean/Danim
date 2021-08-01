const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const app = express();
const api = require('./routes/index');

app.use(bodyParser.json());
app.use('/api', api);

// get
app.get('/api', api);
app.get('/api/busstop', api);

//post
app.post('/api/register', api);
app.post('/api/login', api);
app.post('/api/post/sms', api);
app.post('/api/chkDuplicate', api);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
