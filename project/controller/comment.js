var queryMysql = require('../model/db');
function addComment(req, res, next) {
    //img name score count likeNum readNum address len des tel 
    var body = req.query;
    if (!body.username||!body.waterId||!body.content||!body.time) {
        var json = {
            isok: false,  //true-成功 false-失败
            code: 1,  //-1-未登录 0-成功 1-参数问题 2-数据错误
            info: '参数均不能为空',

        }
        res.send(json)
    } else {
        var sql = "SELECT * FROM user WHERE name='" + body.username+"'";
        queryMysql(sql, (err, result) => {
            console.log("*********************************");
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
            var user=result[0];
           
            body.id=new Date().getTime()+''+Math.floor(Math.random()*999999+100000);
            

            let sql =user.img? "INSERT INTO comment (id, userId, waterId, ava,name,content,time) VALUES ('" + body.id + "', '" + user.id + "', '" + body.waterId + "', '" + user.img+"', '" + user.name + "', '" + body.content + "', '" + body.time + "')":
            "INSERT INTO comment (id, userId, waterId,name,content,time) VALUES ('" + body.id + "', '" + user.id + "', '" + body.waterId + "', '" + user.name + "', '" + body.content + "', '" + body.time + "')"
            console.log(sql)
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
                    info: "评论成功"
                }
                res.send(json)
            });
        });
    }
}
function findComment(req, res, next) {
    //参数 {}
    var body=req.query;
    var sql='SELECT * FROM comment';
    if(body.waterId){
        sql='SELECT * FROM comment WHERE waterId='+body.waterId;
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
        var json={
            isok:true,
            code:0,
            info:"查询成功",
            data:result
        }
        res.send(json)
    });

}
function delComment(req, res, next) {
    //必传id
    var body=req.query;
    var sql="DELETE FROM `comment` WHERE (`id`='"+body.id+"')";
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
        var json={
            isok:true,
            code:0,
            info:"删除成功",
            data:result
        }
        res.send(json)
    });
}


module.exports = {
    addComment,
    findComment,
    delComment,
}