/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : test2

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2019-07-24 19:32:33
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for repair
-- ----------------------------
DROP TABLE IF EXISTS `repair`;
CREATE TABLE `repair` (
  `id` varchar(155) NOT NULL,
  `name` varchar(255) NOT NULL,
  `score` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `tel` varchar(255) NOT NULL,
  `len` varchar(255) NOT NULL,
  `likeNum` varchar(255) NOT NULL,
  `readNum` varchar(255) NOT NULL,
  `info` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

-- ----------------------------
-- Records of repair
-- ----------------------------
INSERT INTO `repair` VALUES ('1563523233641126966', '维修站1', '5', '手机、电脑、ipad', '小李村11', '14828283333', '30m', '300', '500', '欢迎光临');
INSERT INTO `repair` VALUES ('1563523283851724180', '维修2', '3', '家具、家电', '小李村22', '15499299929', '30m', '300', '1000', '不想写');
