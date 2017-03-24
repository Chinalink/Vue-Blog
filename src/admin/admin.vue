<template>
  <div>
    <xd-sidebar @changeTitle="getTitle"></xd-sidebar>
    <div class="xd-content">
      <xd-topbar></xd-topbar>
      <div class="xd-content-page">
        <h1>{{ pageTitle }}</h1>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style>
  .xd-content{margin-left: 220px;}
  .xd-content-page{padding: 20px;}
</style>

<script>
  import sideBar from '../components/admin/sideBar.vue'
  import topBar from '../components/admin/topBar.vue'

  export default {
    data () {
      return {
        pageTitle: '主页'
      }
    },
    name: 'adminIndex',
    components: {
      'xd-sidebar': sideBar,
      'xd-topbar': topBar
    },
    methods: {
      getTitle (title) {
        console.log(title)
        this.pageTitle = title
      }
    }
  }
</script>
