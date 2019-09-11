//统一的返回值
/**
  json={
   isok:true/false,  //true-成功 false-失败
    code:-1,  //-1-未登录 0-成功 1-参数问题 2-数据错误
    info:'信息描述',
    data:[], //数据
  
  } 
 *  */
var login = require('./login').login;
function defaultRouter(req, res, next) {
  if (req.session.name) {
    next();
  } else {
    var json = {
      isok: false,  //true-成功 false-失败
      code: -1,  //-1-未登录 0-成功 1-参数问题 2-数据错误
      info: '亲，请先登录'
    }
    res.send(json)
  }
}
function exit(req,res){
    delete req.session.name;
    res.send({
      isok:true,
      code:0,
      info:"退出登录"
    })
}
//数据库
var queryMysql=require('../model/db');
//管理员
var manage=require('./manage');
//获取七牛云token
var getToken=require("./getToken");
//首页轮播图
var banner=require('./banner')
//家教轮播图
var teacherBanner=require('./teacherBanner')
//家教类型
var teacherType=require("./teacherType")
//家教排行
var teacherTop=require("./teacherTop")
//用户管理
var user=require("./user")
//水站管理
var water=require("./water")
//水站评论
var comment=require("./comment")

//维修管理
var repair=require("./repair.js")
//维修评论
var repairComment=require("./repairComment.js")

//家政轮播图
var homeBanner=require('./homeBanner')
//家政人员管理
var homeWorker=require("./homeWorker")
module.exports = {
  login,
  exit,
  default: defaultRouter,
  addManage:manage.addManage,
  findManage:manage.findManage,
  delManage:manage.delManage,
  updateManage:manage.updateManage,
  changePassManage:manage.changePassManage,
  addBanner:banner.addBanner,
  banner:banner.banner,
  delBanner:banner.delBanner,
  getToken:getToken,
  addTeacherBanner:teacherBanner.addTeacherBanner,
  teacherBanner:teacherBanner.teacherBanner,
  delTeacherBanner:teacherBanner.delTeacherBanner,
  addTeacherType:teacherType.addTeacherType,
  teacherType:teacherType.teacherType,
  delTeacherType:teacherType.delTeacherType,
  updateTeacherType:teacherType.updateTeacherType,
  addTeacherTop:teacherTop.addTeacherTop,
  teacherTop:teacherTop.teacherTop,
  delTeacherTop:teacherTop.delTeacherTop,
  updateTeacherTop:teacherTop.updateTeacherTop,
  addUser:user.addUser,
  findUser:user.findUser,
  delUser:user.delUser,
  updateUser:user.updateUser,
  changePassUser:user.changePassUser,
  addWater:water.addWater,
  findWater:water.findWater,
  delWater:water.delWater,
  updateWater:water.updateWater,

  addComment:comment.addComment,
  findComment:comment.findComment,
  delComment:comment.delComment,

  addRepair:repair.addRepair,
  findRepair:repair.findRepair,
  delRepair:repair.delRepair,
  updateRepair:repair.updateRepair,

  addRepairComment:repairComment.addRepairComment,
  findRepairComment:repairComment.findRepairComment,
  delRepairComment:repairComment.delRepairComment,

  addHomeBanner:homeBanner.addHomeBanner,
  homeBanner:homeBanner.homeBanner,
  delHomeBanner:homeBanner.delHomeBanner,

  addHomeWorker:homeWorker.addHomeWorker,
  findHomeWorker:homeWorker.findHomeWorker,
  delHomeWorker:homeWorker.delHomeWorker,
  updateHomeWorker:homeWorker.updateHomeWorker,
  getQualification:homeWorker.getQualification,
  getHomeType:homeWorker.getHomeType
}
