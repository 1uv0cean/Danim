const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const api = require('./routes/index');

app.use(bodyParser.json());
app.use('/api', api);

// get
app.get('/api', api);

//post
app.post('/api/register', api);
app.post('/api/login', api);
app.post('/api/post/sms', api);
app.post('/api/chkDuplicate', api);
app.post('/api/upload', api);
app.post('/api/busstop', api);
app.post('/api/post/changePhone', api);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
