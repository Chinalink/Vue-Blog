<template>
  <div class="xd-sidebar">
    <div class="xd-siderbar-head">
      <img :src="headimg" alt="侧栏头像">
      <h4>胡小呆</h4>
      <p>(超级管理员)</p>
    </div>
    <ul>
      <li v-for="(nav, index) of navlist" :class="{active: isActive==index}" @click="toggle(index, nav)">
        <router-link :to="{name: nav.link}"><i class="iconfont" :class="'ic-' + nav.icon"></i>{{ nav.title }}
          <span class="iconfont" :class="{'ic-leftArrow': isActive!=index||isActive==0, 'ic-downArrow':isActive==index&&isActive!=0}" ></span>
        </router-link>
          <ul v-if="nav.children" v-show="isActive==index">
            <li v-for="children of nav.children" @click.stop="childToggle(children.title)">
              <router-link :to="{name: children.link}">{{ children.title }}</router-link>
            </li>
          </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  import headSrc from '../../images/common/pic_head.jpg'
  export default {
    name: 'sideBar',
    data () {
      return {
        headimg: headSrc,
        navlist: [
          { icon: 'home', title: '主页', link: 'index' },
          { icon: 'note', title: '文章管理', children: [{title: '文章列表', link: 'articleList'}, {title: '分类目录', link: 'edit'}, {title: '文章标签', link: 'edit'}] },
          { icon: 'image', title: '图片管理', children: [{title: '分类目录', link: 'pic'}, {title: '文章标签', link: 'pic'}] },
          { icon: 'user', title: '用户管理' },
          { icon: 'set', title: '设置' }
        ],
        isActive: ''
      }
    },
    mounted: function () {
      console.log(this.isActive)
    },
    methods: {
      toggle (index, nav) {
        this.isActive = index
        if (!nav.children) {
          this.$emit('changeTitle', nav.title)
        }
      },
      childToggle (title) {
        this.$emit('changeTitle', title)
      }
    }
  }
</script>

<style scoped>
.xd-sidebar{position: fixed; width: 220px; height: 100%; background: #2f4050;}
.xd-sidebar>ul>li.active{background-color: #293846;}
.xd-sidebar>ul>li>a{ display: block; padding: 14px 20px 14px 25px; font-size: 12px; color: #a7b1c2; cursor: pointer;}
.xd-sidebar>ul>li>a:hover{ background-color: #293846; color: #fff;}
.xd-sidebar>ul>li>a>i{margin-right: 10px;}
.xd-sidebar>ul>li>a>span{float: right; display: inline;}
.xd-sidebar>ul>li>ul>li:last-child{padding-bottom: 14px;}
.xd-sidebar>ul>li>ul>li>a{display: block; padding: 7px 20px 7px 48px; font-size: 12px; color: #a7b1c2; cursor: pointer;}
.xd-sidebar>ul>li>ul>li>a:hover{color: #fff;}
.xd-siderbar-head{ padding-bottom: 10px; height: 166px; background: url(../../images/common/img_sidebg.png) no-repeat; text-align: center; color: #dfe4ed;}
.xd-siderbar-head>img{ margin-top: 15px; width: 80px; height: 80px; border-radius: 50%;}
.xd-siderbar-head>h4{margin:5px 0; font-size: 14px;}
.xd-siderbar-head>p{font-size: 12px;}
</style>
