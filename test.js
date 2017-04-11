var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.status(200).json({
    status: 'hello, world!'
  });
});

app.listen(3000);