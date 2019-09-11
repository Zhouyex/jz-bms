/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : test2

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2019-07-24 19:32:15
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for homebanner
-- ----------------------------
DROP TABLE IF EXISTS `homebanner`;
CREATE TABLE `homebanner` (
  `id` varchar(155) NOT NULL,
  `img` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

-- ----------------------------
-- Records of homebanner
-- ----------------------------
INSERT INTO `homebanner` VALUES ('15635235867831011950', 'http://pu3hbi0r3.bkt.clouddn.com/1563523585708.jpg');
INSERT INTO `homebanner` VALUES ('1563523591996946046', 'http://pu3hbi0r3.bkt.clouddn.com/1563523591066.jpg');
INSERT INTO `homebanner` VALUES ('1563523596762963446', 'http://pu3hbi0r3.bkt.clouddn.com/1563523595547.jpg');
