var $sql = require('../sqlMap');
var $query = require('../mysql');


// 查询签证数据接口
module.exports = (req, res) => {
    var sql = $sql.twVisa.check + "WHERE dDATE <> '' ORDER BY dID DESC LIMIT 10";
    fetchVisaData(sql, (result) => {
        // console.log(JSON.stringify(result));
        res.send(JSON.stringify(result));
    })
}

const fetchVisaData = (sql, callback) => {
    $query(sql, (err, results) => {
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
