<template>
  <div class="topbar">
    欢迎使用XD-Blog博客系统
    <span class="fr"><i class="iconfont ic-out"></i>退出</span>
    <a class="fr">
      嗨，胡小呆
    </a>
  </div>
</template>

<style>
.topbar{ padding-left: 15px; width: 100%; height: 45px; line-height: 45px; background: #2f4050; color: #fff; font-size: 12px;}
.topbar>a{margin-right: 20px; color: #fff;}
.topbar>span{margin-right: 15px; cursor: pointer;}
.topbar>span>i{margin-right: 10px;}
</style>

<script>
  import headSrc from '../../images/common/pic_head.jpg'
  export default {
    data () {
      return {
        headimg: headSrc
      }
    }
  }

</script>
