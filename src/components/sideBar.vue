<template>
  <div class="sidebar">
    <div class="siderbar-head">
      <img :src="headimg" alt="侧栏头像">
    </div>
    <ul>
      <li>发布文章</li>
      <li>发布文章</li>
      <li>发布文章</li>
      <li>发布文章</li>
      <li>发布文章</li>
      <li>发布文章</li>
    </ul>
  </div>
</template>

<style>
.sidebar{width: 260px; background: }
</style>

<script>
  import headSrc from '../images/common/pic_head.jpg'
  export default {
    name: 'sideBar',
    data () {
      return {
        headimg: headSrc
      }
    }
  }
</script>
