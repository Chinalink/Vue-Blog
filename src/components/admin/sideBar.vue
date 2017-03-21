<template>
  <div class="sidebar">
    <div class="siderbar-head">
      <img :src="headimg" alt="侧栏头像">
      <h4>胡小呆</h4>
      <p>(超级管理员)</p>
    </div>
    <ul>
      <li v-for="nav in navlist">
        <a :href="nav.link"><i class="iconfont" :class="'ic-' + nav.icon"></i>{{ nav.title }}<span class="iconfont ic-leftArrow"></span></a>
      </li>
    </ul>
  </div>
</template>

<style>
.sidebar{position: fixed; width: 220px; height: 100%; background: #2f4050;}
.sidebar>ul>li>a{ display: block; padding: 14px 20px 14px 25px; font-size: 12px; color: #a7b1c2;}
.sidebar>ul>li>a:hover{ background-color: #293846; color: #fff;}
.sidebar>ul>li>a>i{margin-right: 10px;}
.sidebar>ul>li>a>span{float: right; display: inline;}
.siderbar-head{ padding-bottom: 10px; height: 166px; background: url(../../images/common/img_sidebg.png) no-repeat; text-align: center; color: #dfe4ed;}
.siderbar-head>img{ margin-top: 15px; width: 80px; height: 80px; border-radius: 50%;}
.siderbar-head>h4{margin:5px 0; font-size: 14px;}
.siderbar-head>p{font-size: 12px;}
</style>

<script>
  import headSrc from '../../images/common/pic_head.jpg'
  export default {
    name: 'sideBar',
    data () {
      return {
        headimg: headSrc,
        navlist: [
          { icon: 'home', title: '主页', link: '/admin' },
          { icon: 'note', title: '文章管理', link: '/admin' },
          { icon: 'image', title: '图片管理', link: '/admin' },
          { icon: 'user', title: '用户管理', link: '/admin' },
          { icon: 'note', title: '文章管理', link: '/admin' }
        ]
      }
    }
  }
</script>
