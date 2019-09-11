var queryMysql = require('../model/db');
function addManage(req, res, next) {
    //name pass time des
    var body = req.body;
    if (!body.name || !body.pass || !body.time || !body.des) {
        var json = {
            isok: false,  //true-成功 false-失败
            code: 1,  //-1-未登录 0-成功 1-参数问题 2-数据错误
            info: '参数均不能为空',

        }
        res.send(json)
    } else {
        //判断该账号是否存在
        var sql = "SELECT * FROM manage WHERE name='" + body.name + "'";

        queryMysql(sql, (err, result) => {
            console.log(err)
            if (err) {
                var json = {
                    isok: false,  //true-成功 false-失败
                    code: 2,  //-1-未登录 0-成功 1-参数问题 2-数据错误
                    info: '数据库错误，请联系服务端'
                }
                res.send(json);
                return;
            };
            if (result.length > 0) {
                var json = {
                    isok: false,  //true-成功 false-失败
                    code: 3,  //-1-未登录 0-成功 1-参数问题 2-数据错误
                    info: '该账号已存在'
                }
                res.send(json);
                return;
            }
            body.id = new Date().getTime() + '' + Math.floor(Math.random() * 999999 + 100000);
            let sql = "INSERT INTO manage (id, name, pass, time, des) VALUES ('" + body.id + "', '" + body.name + "', '" + body.pass + "', '" + body.time + "', '" + body.des + "')";
            queryMysql(sql, (err, result) => {
                if (err) {

                    var json = {
                        isok: false,  //true-成功 false-失败
                        code: 2,  //-1-未登录 0-成功 1-参数问题 2-数据错误
                        info: '数据库错误，请联系服务端'
                    }
                    res.send(json);
                    return;
                };
                var json = {
                    isok: true,
                    code: 0,
                    info: "添加成功"
                }
                res.send(json)
            });
        });




    }
}
function findManage(req, res, next) {
    //参数 {}
    var body = req.body;
    var sql = 'SELECT * FROM manage';
    if (body.id) {
        sql = 'SELECT * FROM manage WHERE id=' + body.id;
    }

    queryMysql(sql, (err, result) => {
        if (err) {
            var json = {
                isok: false,  //true-成功 false-失败
                code: 2,  //-1-未登录 0-成功 1-参数问题 2-数据错误
                info: '数据库错误，请联系服务端'
            }
            res.send(json);
            return;
        };
        var json = {
            isok: true,
            code: 0,
            info: "查询成功",
            data: result
        }
        res.send(json)
    });

}
function delManage(req, res, next) {
    //必传id
    var body = req.body;
    var sql = "DELETE FROM `manage` WHERE (`id`='" + body.id + "')";
    queryMysql(sql, (err, result) => {
        if (err) {

            var json = {
                isok: false,  //true-成功 false-失败
                code: 2,  //-1-未登录 0-成功 1-参数问题 2-数据错误
                info: '数据库错误，请联系服务端'
            }
            res.send(json);
            return;
        };
        var json = {
            isok: true,
            code: 0,
            info: "删除成功",
            data: result
        }
        res.send(json)
    });
}
function updateManage(req, res, next) {
    var body = req.body;
    var id = body.id;
    delete body.id;

    var str = '';
    for (var i in body) {
        str += i + "='" + body[i] + "',";
    }
    str = str.substr(0, str.length - 1)
    // var sql="UPDATE `manage` SET `name`='12244', `pass`='144' WHERE (`id`='1562150052571')"
    var sql = "UPDATE manage SET " + str + " WHERE (id=" + id + ")";
    queryMysql(sql, (err, result) => {
        if (err) {
            var json = {
                isok: false,  //true-成功 false-失败
                code: 2,  //-1-未登录 0-成功 1-参数问题 2-数据错误
                info: '数据库错误，请联系服务端'
            }
            res.send(json);
            return;
        };

        var json = {
            isok: true,
            code: 0,
            info: "更新成功",
            data: result
        }
        res.send(json)
    });
}
function changePassManage(req, res) {
    var body = req.body;
    //参数 name oldpass newpass
    var sql = "SELECT * FROM manage WHERE name='" + body.name + "'";
    queryMysql(sql, (err, result) => {
        if (err) {
            var json = {
                isok: false,  //true-成功 false-失败
                code: 2,  //-1-未登录 0-成功 1-参数问题 2-数据错误
                info: '数据库错误，请联系服务端'
            }
            res.send(json);
            return;
        };
        if (result.length == 0) {
            var json = {
                isok: false,
                code: 3,
                info: "该账号不存在"
            }
            res.send(json);
            return;
        }
        var obj = result[0];
        if (obj.pass !== body.oldpass) {
            var json = {
                isok: false,
                code: 4,
                info: "账号或者密码错误"
            }
            res.send(json);
            return;
        }
        var sql2 = "UPDATE `manage` SET `pass`='" + body.newpass + "' WHERE (`name`='" + body.name + "')";
        queryMysql(sql2, (err, result) => {
            if (err) {
                var json = {
                    isok: false,  //true-成功 false-失败
                    code: 2,  //-1-未登录 0-成功 1-参数问题 2-数据错误
                    info: '数据库错误，请联系服务端'
                }
                res.send(json);
                return;
            };
            var json = {
                isok: true,
                code: 0,
                info: "密码修改成功",
                data: result
            }
            res.send(json)
        });

    });
}
module.exports = {
    addManage,
    findManage,
    delManage,
    updateManage,
    changePassManage
}