/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : test2

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2019-07-24 19:32:54
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for teachertype
-- ----------------------------
DROP TABLE IF EXISTS `teachertype`;
CREATE TABLE `teachertype` (
  `id` varchar(150) NOT NULL,
  `type` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

-- ----------------------------
-- Records of teachertype
-- ----------------------------
INSERT INTO `teachertype` VALUES ('15635225841931004853', '初中', 'http://pu3hbi0r3.bkt.clouddn.com/1563522580668.jpg');
INSERT INTO `teachertype` VALUES ('1563522590962802502', '高中', 'http://pu3hbi0r3.bkt.clouddn.com/1563522587916.jpg');
INSERT INTO `teachertype` VALUES ('1563522597146644376', '小学', 'http://pu3hbi0r3.bkt.clouddn.com/1563522594231.jpg');
