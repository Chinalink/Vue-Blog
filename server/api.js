"use strict";
const Models = require('./db');
const express = require('express');
const router = express.Router();

router.post('/api/createAccount',(req, res) => {
  let account = req.body.account
  Models.LoginModels.findOne({account}, 'account', (err, data) => {
    if(data.account === account){
      res.send({state: 0, msg: '账号已存在'})
    }else{
      let newAccount = new Models.Login({
        account: req.body.account,
        password: req.body.password
      });
      newAccount.save((err, data) => {
        if(err) {
          res.send('创建失败');
        } else {
          res.send('创建成功');
        }
      });
    }
  })
});

router.post('/api/getAccound', (req, res) => {
  let account = req.body.account
  Models.LoginModels.findOne( {account}, 'password' , (err, data) => {
    switch (true) {
      case !!err:
      console.log(err)
      break
      case !data:
      res.send({state: 0, msg: '账号不存在'})
      break
      case data.password === password:
        res.send({state: 1, msg: '登陆成功'})
        break
      case data.password !== password:
        res.send({state: 2, msg: '密码错误'})
        break
      default :
        res.send({state: 3, msg: '未知错误'})
    }
  })
})

module.exports = router;
