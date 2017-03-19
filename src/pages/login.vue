<template>
  <div class="wrap-row">
    <div class="login-box">
      <h1>XD-Blog</h1>
      <input type="text" name="" value="" placeholder="请输入用户名">
      <input type="password" name="" value="" placeholder="请输入密码">
      <button type="button" name="button">登录</button>
      <a href="#">忘记密码？</a>
    </div>
  </div>
</template>

<style scoped>
.wrap-row{
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background:url('../images/login/bg.jpg') center no-repeat;
  background-size: 100% 100%;
}
.login-box{
  position: absolute;
  top: 50%;
  left: 50%;
  transform:translate(-50%,-50%);
  padding: 20px 50px 40px;
  width: 400px;
  background:rgba(0,0,0,.5);
  color: #fff;
}
.login-box h1{
  margin-bottom:20px;
  text-align: center;
}
.login-box input,.login-box button{
  width: 100%;
  height: 40px;
  line-height: 40px;
  border:0;
  border-radius: 2px;
  color: #fff;
}
.login-box input{
  margin-bottom: 20px;
  background: rgba(255,255,255,.3);
  text-indent: 15px;
}
.login-box button{
  margin-top: 20px;
  background: #687dfd;
}
.login-box a{
  float: right;
  margin-top: 15px;
  font-size: 14px;
  color: #fff;
  text-align: right;
}
.login-box input::-webkit-input-placeholder { /* WebKit browsers */
  color:#fff;
}
.login-box input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
　color:#fff;
}
.login-box input::-moz-placeholder { /* Mozilla Firefox 19+ */
　color:#fff;
}
.login-box input:-ms-input-placeholder { /* Internet Explorer 10+ */
　color:#fff;
}
</style>
<script>
export default {
  name: 'login',
  data () {
    return {

    }
  }
}
</script>
