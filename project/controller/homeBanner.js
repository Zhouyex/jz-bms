var queryMysql = require('../model/db');
function addHomeBanner(req, res, next) {
    //img
    
    var body = req.query;
    if (!body.img) {
        var json = {
            isok: false,  //true-成功 false-失败
            code: 1,  //-1-未登录 0-成功 1-参数问题 2-数据错误
            info: '参数均不能为空',

        }
        res.send(json)
    } else {
        body.id=new Date().getTime()+''+Math.floor(Math.random()*999999+100000);
        let sql = "INSERT INTO homeBanner (id, img) VALUES ('"+body.id+"', '"+body.img+"')";
        console.log(sql)
        queryMysql(sql, (err, result) => {
            if (err) {
                console.log(err)
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
                info:"添加成功"
            }
            res.send(json)
        });


    }
}
function homeBanner(req, res, next) {
    //参数 {}
    var body=req.query;
    var sql='SELECT * FROM homeBanner';
    if(body.id){
        sql='SELECT * FROM homeBanner WHERE id='+body.id;
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
function delHomeBanner(req, res, next) {
    //必传id
    var body=req.query;
    var sql="DELETE FROM `homeBanner` WHERE (`id`='"+body.id+"')";
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
    addHomeBanner,
    homeBanner,
    delHomeBanner
}