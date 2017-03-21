<template>
  <div class="">
    <xd-sidebar></xd-sidebar>
    这里是首页
  </div>
</template>

<script>
  import sideBar from '../components/admin/sideBar.vue'
  export default {
    name: 'adminIndex',
    components: {
      'xd-sidebar': sideBar
    }
  }
</script>
