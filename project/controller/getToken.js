function getToken(req,res){
    const qiniu = require('qiniu')

    const accessKey = 'cZch8pgcf-Rt8_bKTV_cIc4iEBXTi5QzshniFCOp'
    const secretKey = '_46y1oHS_xsS8ucGE_WHXqcUnvo1oPb1NuaWUiZh'

    const mac = new qiniu.auth.digest.Mac(accessKey, secretKey)

    const option = {
    scope: '0422',
    expires: 7200
    }

    const putPolicy = new qiniu.rs.PutPolicy(option)
    const uploadToken = putPolicy.uploadToken(mac);//这个就是要返回给前端的token
    var json={
        isok:true,
        code:0,
        token:uploadToken,
        url:"http://pxho8nogq.bkt.clouddn.com"
    }
    res.send(json)
}
module.exports=getToken;