<template>
  <div>
    <xd-sidebar></xd-sidebar>
    <div class="xd-content">
      <xd-topbar></xd-topbar>
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
  .xd-content{margin-left: 220px;}
</style>

<script>
  import sideBar from '../components/admin/sideBar.vue'
  import topBar from '../components/admin/topBar.vue'

  export default {
    name: 'adminIndex',
    components: {
      'xd-sidebar': sideBar,
      'xd-topbar': topBar
    }
  }
</script>
