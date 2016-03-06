'use strict';
const express = require('express');
const server = express();
const HOME = process.env.PJ_HOME;
const PORT = process.env.PJ_PORT;
 
var app;

exports.start = (cb) => {
  server.use(express.static(HOME + '/src/public'));
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
