var https = require('https')

var $sql = require('../sqlMap')
var $query = require('../mysql')

var options = {
  hostname: "pb.immigration.gov.tw",
  port: 443,
  path: "https://pb.immigration.gov.tw/viewDailyQuota/firstKindDailyQuota",
  method: "GET",
  headers: {
    'Host': 'pb.immigration.gov.tw',
    'Connection': 'keep-alive',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36',
    'Upgrade-Insecure-Requests': '1',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6'
  }
}

var req=https.request(options,function(res){
  // 通过监听 res 的 data 事件 和 end 事件获取服务器返回的数据
 var buffer=[];
 // 监听data事件获取服务端返回的数据
 res.on('data',function(chunk){
   buffer.push(chunk); //将服务端获取的buffer数据全部追加至buffer数组中
 })

 // 监听end事件请求结束
 res.on("end",function(){
   buffer=buffer.concat(buffer);  //拼接buffer数组
   var html=buffer.toString('utf8');  //buffer转字符串
   console.log(html);

  //  // 通过 cheerio 模块加载 HTML 代码
  //  var $=cheerio.load(html);
  //  var jokes=[];

  //  // 通过选择器选择我们要的元素
  //  // 1. 选取所有段子的div
  //  $('div.article.block.untagged.mb15').each(function(index,ele){
  //    // 提取段子作者
  //    var author=$(ele).find("h2").text();

  //    // 提取段子正文
  //    var content=$(ele).find("div.content span").text();

  //    //把每个段子放到数组中
  //    jokes.push({
  //      author:author,
  //      content:content
  //    });
  //  });

  //  // 把jokes写入到文件
  //  fs.writeFile(path.join(__dirname,'jokes.json'),JSON.stringify(jokes),function(err){
  //    if(err){
  //      throw err;
  //    }
  //    console.log('ok');
  //  })
 })
})

// 监听本次请求是否出错
req.on("error",function(err){
 console.log('出错了：' + err);
});

// 查询签证数据接口
// module.exports = (req, res) => {
//     var sql = $sql.twVisa.check + "WHERE dDATE <> '' ORDER BY dID DESC LIMIT 10"
//     fetchVisaData(sql, (result) => {
//         // console.log(JSON.stringify(result))
//         res.send(JSON.stringify(result))
//     })
// }

// const fetchVisaData = (sql, callback) => {
//     $query(sql, (err, results) => {
//         results = err
//             ? {
//                 error_code: 1,
//                 error_message: 'Can\'t fetch current data.',
//                 result: ''
//             }
//             : {
//                 error_code: 0,
//                 error_message: '',
//                 result: results
//             }
//         callback(results)
//     })
// }

// module.exports = router
