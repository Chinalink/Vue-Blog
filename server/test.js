"use strict";
// 引用mongoose
const mongoose = require('mongoose');
// 创建一个数据库连接
mongoose.connect('mongodb://localhost/test');

// 为这次连接绑定事件
const db = mongoose.connection;

// 监测是否有异常
db.once('error',() => console.log("数据库连接失败：" + error));
db.once('open',() => console.log("------数据库连接成功！------"));

const PersonSchema = new mongoose.Schema({
  name:String
})

PersonSchema.methos.speak = function(){
  console.log('我的名字叫'+ this.name);
}

const PersonModel = db.model('Person', PersonSechema);

let personEntity = new PersonModel({name:'Link',age:18});

PersonSchema.speak();
