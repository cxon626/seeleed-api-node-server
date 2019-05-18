const apis = require('./api/index');
const bugs = require('./fetch/index')
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  // res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1');

  if(req.method=="OPTIONS") res.send(200);
  else next();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// 后端api路由
app.use('/apis', apis);
app.use('/bugs', bugs);

// 监听端口
app.listen(5626);
console.log('Success listen at port: 5626...');
