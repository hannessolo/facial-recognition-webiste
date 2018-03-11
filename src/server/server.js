const express = require('express');
const app = express();
const path = require('path');
var https = require('https');
var fs = require('fs');

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  //intercepts OPTIONS method
  if ('OPTIONS' === req.method) {
    //respond with 200
    res.send(200);
  }
  else {
    //move on
    next();
  }
});

app.use('/public', express.static(path.join(__dirname, '../client/public')));

app.get('/api/pages-available', (req, res) => {
  res.sendFile(path.join(__dirname, 'content', 'available-pages.json'));
});

app.get('/api/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'content', 'html', req.params.id + '.html'));
});

app.get('/api/refs/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'content', 'references', req.params.id + '.json'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/facialrecognition.ml/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/facialrecognition.ml/cert.pem'),
  ca: fs.readFileSync('/etc/letsencrypt/live/facialrecognition.ml/chain.pem'),
};

https.createServer(options, app).listen(443);
