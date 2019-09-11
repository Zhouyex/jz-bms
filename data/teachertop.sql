/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : test2

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2019-07-24 19:32:48
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for teachertop
-- ----------------------------
DROP TABLE IF EXISTS `teachertop`;
CREATE TABLE `teachertop` (
  `id` varchar(150) NOT NULL,
  `img` varchar(255) NOT NULL,
  `num` varchar(150) NOT NULL,
  `teacherImg` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

-- ----------------------------
-- Records of teachertop
-- ----------------------------
INSERT INTO `teachertop` VALUES ('1563522700194721869', 'http://pu3hbi0r3.bkt.clouddn.com/1563522690562.jpg', '20', 'http://pu3hbi0r3.bkt.clouddn.com/1563522693350.jpg');
INSERT INTO `teachertop` VALUES ('15635227142691072704', 'http://pu3hbi0r3.bkt.clouddn.com/1563522708623.jpg', '3000', 'http://pu3hbi0r3.bkt.clouddn.com/1563522711055.jpg');
INSERT INTO `teachertop` VALUES ('1563522727142452622', 'http://pu3hbi0r3.bkt.clouddn.com/1563522719075.jpg', '200', 'http://pu3hbi0r3.bkt.clouddn.com/1563522720971.jpg');
