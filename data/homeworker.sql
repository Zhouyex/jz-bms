/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : test2

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2019-07-24 19:32:21
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for homeworker
-- ----------------------------
DROP TABLE IF EXISTS `homeworker`;
CREATE TABLE `homeworker` (
  `id` varchar(155) NOT NULL,
  `img` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `year` varchar(255) NOT NULL,
  `vNum` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `age` varchar(255) NOT NULL,
  `edu` varchar(255) NOT NULL,
  `experience` varchar(255) NOT NULL,
  `readNum` varchar(255) NOT NULL,
  `likeNum` varchar(255) NOT NULL,
  `len` varchar(255) NOT NULL,
  `tel` varchar(255) NOT NULL,
  `qualification` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `info` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

-- ----------------------------
-- Records of homeworker
-- ----------------------------
INSERT INTO `homeworker` VALUES ('1563523778689340895', 'http://pu3hbi0r3.bkt.clouddn.com/1563523777205.jpg', '张美丽', '5', 'v5', '300元/小时', '武汉', '30', '研究生', '5年', '500', '300', '4.1km', '15737373737', '身份证,学位证,健康证,上岗证,助理家政管理师,家政管理师', '保姆,家具保养,新居开荒,月嫂', '专业人做专业事');
INSERT INTO `homeworker` VALUES ('1563523844885248675', 'http://pu3hbi0r3.bkt.clouddn.com/1563524109260.jpg', '王美丽', '3', 'v2', '100元/小时', '武汉', '40', '高中', '2年', '500', '400', '20m', '15737273727', '身份证,产后恢复师证,健康证,上岗证', '钟点工,月嫂,保洁,家电清洗', '踏实');
