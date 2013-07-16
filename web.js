var express = require('express');
var fs=require('fs');

var app = express.createServer(express.logger());
var ifile=fs.readFileSync('index.html').toString();

app.get('/', function(request, response) {
  response.send(ifile);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
