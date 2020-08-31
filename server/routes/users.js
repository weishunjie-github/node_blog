/*
 * @description: 
 * @author: shunjie
 * @github: 此处 写git项目地址
 * @lastEditors: shunjie
 * @LastEditTime: 2020-08-28 13:57:47
 * @Copyright: 此处写项目版本号
 */
var express = require('express');
var router = express.Router();
const { PWD_SALT,PRIVATE_KEY,EXPIRESD } = require('../utils/constant')
const { md5 } = require('../utils/index')
const querySql = require('../db/index')
const jwt = require('jsonwebtoken')
// 注册接口
router.post('/register', async (req, res, next) => {
  let { username, password, nickname } = req.body;
  try {
    let user = await querySql('select * from user where username =?', [username])
    if (!user || user.length == 0) {
      password = md5(`${password}${PWD_SALT}`)
      await querySql('insert into user(username,password,nickname) value(?,?,?)', [username, password, nickname]);
      res.send({
        code: 0,
        msg: '注册成功~'
      })
    } else {
      res.send({ code: -1, msg: '该账号已经注册' })
    }

  } catch (error) {
    console.log(error);
    next(error);
  }


});
// 登录接口
router.post('/login', async (req, res, next) => {
  let { username, password, nickname } = req.body;
  try {
    let user = await querySql('select * from user where username =?', [username])
    if (!user || user.length == 0) {
      res.send({ code: -1, msg: '该账号不存在' })
      await querySql('insert into user(username,password,nickname) value(?,?,?)', [username, password, nickname]);
      res.send({
        code: 0,
        msg: '注册成功~'
      })
    } else {
      password = md5(`${password}${PWD_SALT}`)
      let result = await querySql('select * from user where username = ? and password =?',[username,password])
      res.send({ code: -1, msg: '该账号已经注册' })
    }

  } catch (error) {
    console.log(error);
    next(error);
  }
})
module.exports = router;
