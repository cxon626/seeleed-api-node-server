// sql语句
var sqlMap = {
    // 用户
    twVisa: {
        check:'SELECT * FROM `twVisa` ',
        add: 'INSERT INTO `twVisa`(`dDATE`, `dACQ`, `dALL`, `dUSED`) VALUES (?,?,?,?)'
    }
}

module.exports = sqlMap;