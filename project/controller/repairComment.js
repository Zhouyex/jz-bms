var queryMysql = require('../model/db');
function addRepairComment(req, res, next) {
    //img name score count likeNum readNum address len des tel 
    var body = req.query;
    if (!body.name||!body.repairId||!body.content||!body.time) {
        var json = {
            isok: false,  //true-成功 false-失败
            code: 1,  //-1-未登录 0-成功 1-参数问题 2-数据错误
            info: '参数均不能为空',

        }
        res.send(json)
    } else {
        var sql = "SELECT * FROM user WHERE name='" + body.name+"'";
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
            var user=result[0];
           
            body.id=new Date().getTime()+''+Math.floor(Math.random()*999999+100000);
            

            let sql =user.img? "INSERT INTO repairComment (id, userId, repairId, ava,name,content,time) VALUES ('" + body.id + "', '" + user.id + "', '" + body.repairId + "', '" + user.img+"', '" + user.name + "', '" + body.content + "', '" + body.time + "')":
            "INSERT INTO repairComment (id, userId, repairId,name,content,time) VALUES ('" + body.id + "', '" + user.id + "', '" + body.repairId + "', '" + user.name + "', '" + body.content + "', '" + body.time + "')"
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
function findRepairComment(req, res, next) {
    //参数 {}
    var body=req.query;
    var sql='SELECT * FROM repairComment';
    if(body.repairId){
        sql='SELECT * FROM repairComment WHERE repairId='+body.repairId;
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
function delRepairComment(req, res, next) {
    //必传id
    var body=req.query;
    var sql="DELETE FROM `repairComment` WHERE (`id`='"+body.id+"')";
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
    addRepairComment,
    findRepairComment,
    delRepairComment,
}