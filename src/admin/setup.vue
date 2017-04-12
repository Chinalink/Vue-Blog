<template>
  <div class="wrap-row">
    <div class="login-box">
      <h1>XD-Blog</h1>
      <input type="text" v-model.trim="account"  value="" placeholder="请输入用户名">
      <input type="password" v-model.trim="password"   value="" placeholder="请输入密码">
      <button type="button" name="button" @click="setup">注册</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'setup',
  data () {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    setup () {
      let params = {
        account: this.account,
        password: this.password,
        name: '胡小呆'
      }
      this.$http.post('/api/createAccount', params)
        .then((res) => {
          console.log(res.data)
          if (res.data.state === 1) {
            alert('注册成功!')
            this.$router.push({name: 'login'})
          }
        })
        .catch((res) => {
          console.log(res)
        })
    }
  }
}
</script>
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
