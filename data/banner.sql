/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : test2

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2019-07-24 19:31:57
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for banner
-- ----------------------------
DROP TABLE IF EXISTS `banner`;
CREATE TABLE `banner` (
  `id` varchar(150) NOT NULL,
  `img` varchar(255) NOT NULL,
  `des` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

-- ----------------------------
-- Records of banner
-- ----------------------------
INSERT INTO `banner` VALUES ('1563522305748337401', 'http://pu3hbi0r3.bkt.clouddn.com/1563522301018.jpg', 'banner4');
INSERT INTO `banner` VALUES ('1563522313720245497', 'http://pu3hbi0r3.bkt.clouddn.com/1563522310463.jpg', 'banner3');
INSERT INTO `banner` VALUES ('1563524034785184442', 'http://pu3hbi0r3.bkt.clouddn.com/1563524020693.jpg', '北极星');
INSERT INTO `banner` VALUES ('1563526271306577537', 'http://pu3hbi0r3.bkt.clouddn.com/1563526268348.jpg', '11');
INSERT INTO `banner` VALUES ('1563527144614894310', 'http://pu3hbi0r3.bkt.clouddn.com/1563527133303.jpg', '11111');
