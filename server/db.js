// 引用mongoose
const mongoose = require('mongoose');
// 创建一个数据库连接
mongoose.connect('mongodb://localhost/test');

// 为这次连接绑定事件
const db = mongoose.connection;

// 监测是否有异常
db.once('error',() => console.log("数据库连接失败：" + error));
db.once('open',() => console.log("------数据库连接成功！------"));

/************** 定义模式loginSchema **************/
const userSchema = mongoose.Schema({
    account : String,
    password : String
});

const ArticleSchema = mongoose.Schema({
  title : String,
  content : String,
  tag : Array
})

/************** 定义模型Model **************/
const Models = {
    User: mongoose.model('User', userSchema)
}

module.exports = Models;
