/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : test2

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2019-07-24 19:32:43
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for teacherbanner
-- ----------------------------
DROP TABLE IF EXISTS `teacherbanner`;
CREATE TABLE `teacherbanner` (
  `id` varchar(150) NOT NULL,
  `img` varchar(255) NOT NULL,
  `des` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

-- ----------------------------
-- Records of teacherbanner
-- ----------------------------
INSERT INTO `teacherbanner` VALUES ('1563522394085349789', 'http://pu3hbi0r3.bkt.clouddn.com/1563522386528.jpg', 'teacher banner1');
INSERT INTO `teacherbanner` VALUES ('1563522405252976526', 'http://pu3hbi0r3.bkt.clouddn.com/1563522397807.jpg', 'teacher banner2');
INSERT INTO `teacherbanner` VALUES ('1563522412581333796', 'http://pu3hbi0r3.bkt.clouddn.com/1563522409601.jpg', 'banner3');
INSERT INTO `teacherbanner` VALUES ('1563522420263296718', 'http://pu3hbi0r3.bkt.clouddn.com/1563522417033.jpg', 'banner4');
