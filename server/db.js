// 引用mongoose
const mongoose = require('mongoose');
// 创建一个数据库连接
mongoose.connect('mongodb://localhost/test');

// 为这次连接绑定事件
const db = mongoose.connection;

// 监测是否有异常
db.once('error',() => console.log('Mongo connection error'));
db.once('open',() => console.log('Mongo connection successed'));

/************** 定义模式loginSchema **************/
const loginSchema = mongoose.Schema({
    account : String,
    password : String
});

/************** 定义模型Model **************/
const Models = {
    Login: mongoose.model('Login',loginSchema)
}

module.exports = Models;
