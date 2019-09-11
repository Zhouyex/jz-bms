//数据库连接
var mysql = require('mysql');
function queryMysql(sql, callback) {
    let pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'jz'
    });
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log("数据库连接失败");
        } else {
            connection.query(sql, function (err, rows) {
                callback(err, rows)
            })
        }
        pool.end()
    })
}



module.exports = queryMysql;