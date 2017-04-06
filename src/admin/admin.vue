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

<style>
  .xd-content{
    margin-left: 220px;
  }
  .xd-content-page{
    margin: 15px;
    padding:15px;
    background: #fff;
    border-top: 3px solid #e7eaec;
  }
  .xd-content-page>h1{
    padding-bottom: 14px;
    margin: 0 -15px;
    border-bottom: 1px solid #e7eaec;
    font-size: 14px;
    font-weight: 600;
    color: #676a6c;
    text-indent: 15px;
  }
</style>
