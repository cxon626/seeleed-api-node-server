var mysql = require('mysql');
var models = require('../db');

var pool = mysql.createPool(models.mysql);

var query = function (sql, options, callback) {
  pool.getConnection(function (err, conn) {
    if (err) {
      callback(err, null);
    } else {
      conn.query(sql, options, function (err, results, fields) {
        conn.release();
        callback(err, results);
      });
    }
  });
};

module.exports = query;
