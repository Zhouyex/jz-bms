//参数 type name pass
// type 0-超管 1-普管 2-用户
//超管 admin+123
var queryMysql = require('../model/db');
function login(req, res) {
    var body = req.body;
    switch (body.type) {
        case '0':
            if (body.name == 'admin' && body.pass == '123') {
                var json = {
                    isok: true,  //true-成功 false-失败
                    code: 0,  //-1-未登录 0-成功 1-参数问题 2-数据错误
                    info: '登录成功',
                    type: 0, //数据
                }
                req.session.name = 'admin';
                res.send(json)
            } else {
                var json = {
                    isok: false,  //true-成功 false-失败
                    code: 1,  //-1-未登录 0-成功 1-参数问题 2-数据错误
                    info: '账号或者密码错误',
                    type: 0, //数据
                }
                res.send(json)
            };
            break;
        case '1':
            //PG
            //参数 type name pass
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
                if (obj.pass !== body.pass) {
                    var json = {
                        isok: false,
                        code: 4,
                        info: "账号或者密码错误"
                    }
                    res.send(json);
                    return;
                }
                var json = {
                    isok: true,  //true-成功 false-失败
                    code: 0,  //-1-未登录 0-成功 1-参数问题 2-数据错误
                    info: '登录成功',
                    type: 1, //数据
                }
                req.session.name = 'admin';
                res.send(json)

            });
            break;
        case '2':
            //user 
            var sql = "SELECT * FROM user WHERE name='" + body.name + "'";
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
                if (obj.pass !== body.pass) {
                    var json = {
                        isok: false,
                        code: 4,
                        info: "账号或者密码错误"
                    }
                    res.send(json);
                    return;
                }
                var json = {
                    isok: true,  //true-成功 false-失败
                    code: 0,  //-1-未登录 0-成功 1-参数问题 2-数据错误
                    info: '登录成功',
                    type: 1, //数据
                }
                req.session.name = 'admin';
                res.send(json)
            });
            break;
        default:
            var json = {
                isok: false,  //true-成功 false-失败
                code: 1,  //-1-未登录 0-成功 1-参数问题 2-数据错误
                info: '参数错误',
                type: 3, //数据
            }
            res.send(json)

    }


}
module.exports = {
    login
}