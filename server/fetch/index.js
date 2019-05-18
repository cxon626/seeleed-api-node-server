var express = require('express');
var router = express.Router();

var $twVisa = require('./twVisa');

// 测试用
router.get('/test', function (req, res) {
  // console.log('hehe')
  res.send('hehe')
})

router.get('/twVisa', $twVisa)

module.exports = router
