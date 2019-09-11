var queryMysql = require('../model/db');
function addHomeWorker(req, res, next) {
    //img name score count likeNum readNum address len des tel 
    var body = req.query;
    if (!body.img || !body.name||!body.year||!body.vNum || !body.price||!body.city||!body.age || !body.edu||!body.experience||!body.readNum||!body.likeNum||!body.len||!body.tel||!body.qualification||!body.type||!body.info) {
        var json = {
            isok: false,  //true-成功 false-失败
            code: 1,  //-1-未登录 0-成功 1-参数问题 2-数据错误
            info: '参数均不能为空',

        }
        res.send(json)
    } else {
        body.id=new Date().getTime()+''+Math.floor(Math.random()*999999+100000);
       
        var sql="INSERT INTO `homeWorker` (`id`, `img`, `name`, `year`, `vNum`, `price`, `city`, `age`, `edu`, `experience`, `readNum`,`likeNum`,`len`, `tel`, `qualification`, `type`, `info`) VALUES ('"+body.id+"', '"+body.img+"', '"+body.name+"', '"+body.year+"', '"+body.vNum+"', '"+body.price+"', '"+body.city+"', '"+body.age+"', '"+body.edu+"', '"+body.experience+"', '"+body.readNum+"', '"+body.likeNum+"', '"+body.len+"', '"+body.tel+"', '"+JSON.stringify(body.qualification)+"', '"+JSON.stringify(body.type)+"', '"+body.info+"')";
        queryMysql(sql, (err, result) => {
            console.log(sql)
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
            var json={
                isok:true,
                code:0,
                info:"添加成功"
            }
            res.send(json)
        });


    }
}
function findHomeWorker(req, res, next) {
    //参数 {}
    var body=req.query;
    var sql='SELECT * FROM homeWorker';
    if(body.id){
        sql='SELECT * FROM homeWorker WHERE id='+body.id;
    }
    if(body.type){
        sql="SELECT * FROM homeWorker WHERE type LIKE '%"+body.type+"%'"
    }
    
    console.log(sql)
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
        var json={
            isok:true,
            code:0,
            info:"查询成功",
            data:result
        }
        res.send(json)
    });

}
function delHomeWorker(req, res, next) {
    //必传id
    var body=req.query;
    var sql="DELETE FROM `homeWorker` WHERE (`id`='"+body.id+"')";
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
function updateHomeWorker(req,res,next){
    var body=req.query;
    var id=body.id;
    delete body.id;

    var str='';
    for(var i in body){
        str+='`'+i+"`='"+body[i]+"',";
    }
    str=str.substr(0,str.length-1)
    // var sql="UPDATE `manage` SET `name`='12244', `pass`='144' WHERE (`id`='1562150052571')"
    var sql="UPDATE homeWorker SET "+str+" WHERE (id='"+id+"')";
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
            info:"更新成功",
            data:result
        }
        res.send(json)
    });
}

function getQualification(req,res){
    res.send({
        isok:true,
        code:0,
        qualification:["身份证","学位证","健康证","上岗证",'母婴护理师证','催乳师证','产后恢复师证','助理家政管理师','家政管理师','高级家政管理师']
    })
}
function getHomeType(req,res){
    res.send({
        isok:true,
        code:0,
        type:["保姆","月嫂","钟点工","保洁",'家电清洗','家具保养','新居开荒']
    })
}

module.exports = {
    addHomeWorker,
    findHomeWorker,
    delHomeWorker,
    updateHomeWorker,
    getQualification,
    getHomeType
}