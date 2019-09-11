var express=require('express');
var app=express();
//静态资源
app.use(express.static('./static'));

//处理post请求模块
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())

//处理session
var session = require('express-session')
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))


//路由
var Router = require('./controller')

console.log("成功运行在http://localhost:3000")


//添加用户
app.post('/addUser',Router.addUser)

//路由
//登录 type 0-超管 1-普管 name(账号) pass(密码)
app.post('/login',Router.login);
app.use('/',Router.default);//验证登录

//添加管理员
app.post('/addManage',Router.addManage)
//查询管理员
app.post('/findManage',Router.findManage)
// 删除管理员
app.post('/delManage',Router.delManage)
//更新管理员
app.post('/updateManage',Router.updateManage)
//修改密码
app.post('/changePassManage',Router.changePassManage)

//获取七牛云token
app.get('/getToken',Router.getToken)

//添加首页banner图
app.get('/addBanner',Router.addBanner);
//获取首页的轮播图
app.get('/banner',Router.banner);
// 删除轮播图
app.get('/delBanner',Router.delBanner);

//家教轮播图
app.get('/addTeacherBanner',Router.addTeacherBanner);
//获取家教的轮播图
app.get('/teacherBanner',Router.teacherBanner);
// 删除家教轮播图
app.get('/delTeacherBanner',Router.delTeacherBanner);

//家教类型
app.get('/addTeacherType',Router.addTeacherType);
//获取家教类型
app.get('/teacherType',Router.teacherType);
// 删除家教类型
app.get('/delTeacherType',Router.delTeacherType);
//更新家教类型
app.get('/updateTeacherType',Router.updateTeacherType);

//家教排行
app.get('/addTeacherTop',Router.addTeacherTop);
//获取家教排行
app.get('/teacherTop',Router.teacherTop);
// 删除家教排行
app.get('/delTeacherTop',Router.delTeacherTop);
//更新家教排行
app.get('/updateTeacherTop',Router.updateTeacherTop);


//查询用户
app.post('/findUser',Router.findUser)
// 删除用户
app.post('/delUser',Router.delUser)
//更新用户
app.post('/updateUser',Router.updateUser)
//修改密码
app.post('/changePassUser',Router.changePassUser)

//添加水站
app.get('/addWater',Router.addWater)
//查询水站
app.get('/findWater',Router.findWater)
// 删除水站
app.get('/delWater',Router.delWater)
//更新水站
app.get('/updateWater',Router.updateWater);

//添加评论
app.get('/addComment',Router.addComment)
//查询评论
app.get('/findComment',Router.findComment)
// 删除评论
app.get('/delComment',Router.delComment)

//添加维修
app.get('/addRepair',Router.addRepair)
//查询维修
app.get('/findRepair',Router.findRepair)
// 删除维修
app.get('/delRepair',Router.delRepair)
//更新维修
app.get('/updateRepair',Router.updateRepair);

//添加维修评论
app.get('/addRepairComment',Router.addRepairComment)
//查询维修评论
app.get('/findRepairComment',Router.findRepairComment)
// 删除维修评论
app.get('/delRepairComment',Router.delRepairComment)


//家政轮播图
app.get('/addHomeBanner',Router.addHomeBanner);
//获取家政的轮播图
app.get('/homeBanner',Router.homeBanner);
// 删除家政轮播图
app.get('/delHomeBanner',Router.delHomeBanner);

// 家政人员管理
app.get("/addHomeWorker",Router.addHomeWorker)
app.get("/findHomeWorker",Router.findHomeWorker)
app.get("/delHomeWorker",Router.delHomeWorker)
app.get("/updateHomeWorker",Router.updateHomeWorker)
//获取资格证书
app.get("/getQualification",Router.getQualification)
//获取服务类型
app.get("/getHomeType",Router.getHomeType)

//退出登录
app.get("/exit",Router.exit)
app.listen(3000)