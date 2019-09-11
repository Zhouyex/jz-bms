/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : test2

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2019-07-24 19:32:08
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `id` varchar(155) NOT NULL,
  `userId` varchar(155) NOT NULL,
  `ava` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `waterId` varchar(155) NOT NULL,
  `content` varchar(255) NOT NULL,
  `time` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `waterId` (`waterId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES ('1563523129998637978', '1', null, 'user1', '1563522872064817607', '挺好的', '1563523129975');
INSERT INTO `comment` VALUES ('1563523147921152416', '2', null, 'user2', '1563522872064817607', '服务态度很好哦', '1563523147899');
INSERT INTO `comment` VALUES ('1563523165751166689', '2', null, 'user2', '1563522974934400728', '有点贵', '1563523165733');
