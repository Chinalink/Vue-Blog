// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
"use strict";
const models = require('./db');
const express = require('express');
const router = express.Router();

// 创建管理员账户
router.post('/api/createAccount',(req, res) => {
  let account = req.body.account,
      password = req.body.password
  if(account ==''||password==''){
    res.send({state: 2, msg: '账号或密码不能为空'})
  }else{
    models.User.find({}, (err, users) => {
      if(users.length==0){
        let newAccount = new models.User({
          account: account,
          password: password
        });
        newAccount.save((err, user) => {
          if(err) {
            res.send({state: 0, msg: '注册失败'});
          } else {
            res.send({state: 1, msg: '注册成功'});
          }
        });
      }else{
        models.User.findOne({account:account},(err, user) => {
          if(err){
            res.send({state: 4, msg: err})
          }else{
            if(user!=null){
              res.send({state: 3, msg: '账号已存在'})
            }else{
              let newAccount = new models.User({
                account: account,
                password: password
              });
              newAccount.save((err, user) => {
                if(err) {
                  res.send({state: 0, msg: '注册失败'});
                } else {
                  res.send({state: 1, msg: '注册成功'});
                }
              });
            }
          }
        })
      }
    })
  }
});

// 登录
router.post('/api/getAccound', (req, res) => {
  let account = req.body.account
  let password = req.body.password
  models.User.findOne( {account}, 'password' , (err, user) => {
    switch (true) {
      case err:
        res.send({state: 4, msg: err})
        break
      case !user:
        res.send({state: 0, msg: '账号不存在'})
        break
      case user.password === password:
        res.send({state: 1, msg: '登陆成功'})
        break
      case user.password !== password:
        res.send({state: 2, msg: '密码错误'})
        break
      default :
        res.send({state: 3, msg: '未知错误'})
    }
  })
})

module.exports = router;
