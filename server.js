'use strict';
const PORT = 8080;
const express = require('express');
const server = express();
 
var app;

exports.start = (cb) => {
  server.use(express.static(__dirname + '/public'));
  app = server.listen(PORT, function(){
    console.log(`Server started on PORT ${PORT}.`);
    cb && cb();
  });
};

exports.stop = (cb) => {
  app.close();
  console.log(`Server on port ${PORT} is closed.`);
  cb && cb();
};
