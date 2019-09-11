var queryMysql = require('../model/db');
function addRepair(req, res, next) {
    //img name score count likeNum readNum address len des tel 
    var body = req.query;
    if ( !body.name||!body.score||!body.type || !body.address||!body.tel||!body.len ||!body.likeNum||!body.readNum||!body.info) {
        var json = {
            isok: false,  //true-成功 false-失败
            code: 1,  //-1-未登录 0-成功 1-参数问题 2-数据错误
            info: '参数均不能为空',

        }
        res.send(json)
    } else {
        body.id=new Date().getTime()+''+Math.floor(Math.random()*999999+100000);
       
        var sql="INSERT INTO `repair` (`id`, `name`, `score`, `type`, `address`, `tel`, `len`, `likeNum`, `readNum`, `info`) VALUES ('"+body.id+"', '"+body.name+"', '"+body.score+"', '"+body.type+"', '"+body.address+"', '"+body.tel+"', '"+body.len+"', '"+body.likeNum+"', '"+body.readNum+"', '"+body.info+"')";
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
                info:"添加成功"
            }
            res.send(json)
        });


    }
}
function findRepair(req, res, next) {
    //参数 {}
    var body=req.query;
    var sql='SELECT * FROM repair';
    if(body.id){
        sql='SELECT * FROM repair WHERE id='+body.id;
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
function delRepair(req, res, next) {
    //必传id
    var body=req.query;
    var sql="DELETE FROM `repair` WHERE (`id`='"+body.id+"')";
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
function updateRepair(req,res,next){
    var body=req.query;
    var id=body.id;
    delete body.id;

    var str='';
    for(var i in body){
        str+='`'+i+"`='"+body[i]+"',";
    }
    str=str.substr(0,str.length-1)
    // var sql="UPDATE `manage` SET `name`='12244', `pass`='144' WHERE (`id`='1562150052571')"
    var sql="UPDATE repair SET "+str+" WHERE (id='"+id+"')";
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
            info:"更新成功",
            data:result
        }
        res.send(json)
    });
}

module.exports = {
    addRepair,
    findRepair,
    delRepair,
    updateRepair
}