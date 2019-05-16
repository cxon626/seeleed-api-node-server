var cheerio = require('cheerio');
var https = require('https');
// var http = require('http');

var url = 'https://pb.immigration.gov.tw/viewDailyQuota/firstKindDailyQuota'
// var url = 'http://seeleed.com'

https.get(url, res => {
  var items = '';
  res.on('data', item => {
    items += item;
  })

  res.on('end', () => {
    console.log(items)
  })
})