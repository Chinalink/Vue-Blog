// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
"use strict";
const models = require('./db');
const express = require('express');
const router = express.Router();

router.post('/api/createAccount',(req, res) => {
  let account = req.body.account
  let password = req.body.password
  if(account ==''||password==''){
    res.send({state: 4, msg: '账号或密码不能为空'})
  }else{
    models.User.findOne({account}, 'account', (err, data) => {
      if(err){
        res.send({state: 3, msg: err})
      }else{
        if(data.account === account){
          res.send({state: 0, msg: '账号已存在'})
        }else{
          let newAccount = new models.User({
            account: req.body.account,
            password: req.body.password
          });
          newAccount.save((err, data) => {
            if(err) {
              res.send({state: 0, msg: '注册失败'});
            } else {
              res.send({state: 1, msg: '注册失败'});
            }
          });
        }
      }
    })
  }

});

router.post('/api/getAccound', (req, res) => {
  let account = req.body.account
  let password = req.body.password
  models.User.findOne( {account}, 'password' , (err, data) => {
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
