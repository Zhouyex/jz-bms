/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : test2

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2019-07-24 19:33:04
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for water
-- ----------------------------
DROP TABLE IF EXISTS `water`;
CREATE TABLE `water` (
  `id` varchar(155) NOT NULL,
  `img` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `score` varchar(155) NOT NULL,
  `count` varchar(155) NOT NULL,
  `likeNum` varchar(155) NOT NULL,
  `readNum` varchar(155) NOT NULL,
  `address` varchar(255) NOT NULL,
  `len` varchar(255) NOT NULL,
  `des` varchar(255) NOT NULL,
  `tel` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

-- ----------------------------
-- Records of water
-- ----------------------------
INSERT INTO `water` VALUES ('1563522872064817607', 'http://pu3hbi0r3.bkt.clouddn.com/1563526351706.jpg', '水站1', '4', '200', '180', '300', '武汉市 洪山区 鲁磨路222号', '3.1km', '坚持做干净 卫生水资源', '400-100-1111', '40元/桶');
INSERT INTO `water` VALUES ('1563522974934400728', 'http://pu3hbi0r3.bkt.clouddn.com/1563522973926.jpg', '水站2', '5', '300', '190', '500', '武汉市 洪山区 鲁磨路 111号', '4.2km', '水，生命之源', '17839392929', '60元/桶');
