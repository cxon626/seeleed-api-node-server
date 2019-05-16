var express = require('express');
var router = express.Router();
var $sql = require('../sqlMap');
var $query = require('./mysql');

// 测试用
router.get('/test', function (req, res) {
  // console.log('hehe');
  res.send('hehe');
})

// 查询签证数据接口
router.get('/twVisa', function (req, res) {
  var sql = $sql.twVisa.check + "WHERE dDATE <> '' ORDER BY dID DESC LIMIT 10";
  fetchVisaData(sql, function (result) {
    // console.log(JSON.stringify(result));
    res.send(JSON.stringify(result));
  })
})

function fetchVisaData (sql, callback) {
  $query(sql, function (err, results) {
    results = err
           ? {
              error_code: 1,
              error_message: 'Can\'t fetch current data.',
              result: ''
           }
           : {
              error_code: 0,
              error_message: '',
              result: results
           };
    callback(results);
  });
}

module.exports = router;
