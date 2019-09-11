/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : test2

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2019-07-24 19:32:38
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for repaircomment
-- ----------------------------
DROP TABLE IF EXISTS `repaircomment`;
CREATE TABLE `repaircomment` (
  `id` varchar(155) NOT NULL,
  `userId` varchar(155) NOT NULL,
  `repairId` varchar(155) NOT NULL,
  `ava` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  `time` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

-- ----------------------------
-- Records of repaircomment
-- ----------------------------
INSERT INTO `repaircomment` VALUES ('1563523326408993695', '1', '1563523233641126966', null, 'user1', '服务很好', '1563523326384');
INSERT INTO `repaircomment` VALUES ('1563523337135266129', '2', '1563523233641126966', null, 'user2', '价格实惠', '1563523337116');
INSERT INTO `repaircomment` VALUES ('1563523355208798406', '2', '1563523283851724180', null, 'user2', '乱收费', '1563523355189');
