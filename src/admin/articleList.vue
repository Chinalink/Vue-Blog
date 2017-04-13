<template>
  <div class="article-list">
    <div class="article-option">
      <xd-button class="new-article" type="success" @click="alertTxt">写文章</xd-button>
      <div class="radio-box">
        <xd-button class="active">全部（100）</xd-button>
        <xd-button>我的（70）</xd-button>
        <xd-button>已发布（70）</xd-button>
        <xd-button>草稿（30）</xd-button>
      </div>
      <div class="">

      </div>
      <div class="search-box">
        <xd-button type="search">搜索</xd-button>
        <input type="search" name="" value="" placeholder="文章搜索">
      </div>
    </div>
    <table>
			<thead>
				<tr>
					<th style="width:60px;">
            <i class="iconfont ic-check check-all"></i>
          </th>
          <th style="width:420px;">标题</th>
          <th style="width:90px;">作者</th>
          <th style="width:200px;">分类目录</th>
          <th style="width:220px;">标签</th>
          <th style="width:100px;">评论数</th>
          <th style="width:100px;">日期</th>
          <th style="width:140px;">操作</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="article in articles" :key="article.key">
					<td><i class="iconfont ic-check"></i></td>
          <td><router-link :to="{ name: 'index'}">{{ article.title }}</router-link></td>
          <td>{{ article.author }}</td>
          <td><span v-for="categorie in article.categories" :key="categorie.key">{{ categorie }}</span></td>
          <td><span v-for="tag in article.tags" :key="tag.key">{{ tag }}</span></td>
          <td>{{ article.comments }}</td>
          <td>{{ article.date }}</td>
          <td>
            <xd-button type="primary" size="small">编辑</xd-button>
            <xd-button type="success" size="small">预览</xd-button>
            <xd-button type="danger" size="small">删除</xd-button>
          </td>
				</tr>
			</tbody>
		</table>
  </div>
</template>

<script>
  import Button from '../components/admin/button.vue'
  export default {
    data () {
      return {
        articles: [
          {
            title: '测试文章',
            author: '胡小呆',
            categories: ['学习笔记', '前端开发'],
            tags: ['Vue.js', 'Es6'],
            comments: 100,
            date: '2017-04-12'
          },
          {
            title: '测试文章2',
            author: '胡小呆',
            categories: ['学习笔记', '前端开发'],
            tags: ['Vue.js', 'Es6'],
            comments: 100,
            date: '2017-04-12'
          },
          {
            title: '测试文章3',
            author: '胡小呆',
            categories: ['学习笔记', '前端开发'],
            tags: ['Vue.js', 'Es6'],
            comments: 100,
            date: '2017-04-12'
          }
        ]
      }
    },
    methods: {
      alertTxt () {
        alert('1')
      }
    },
    components: {
      'xd-button': Button
    }
  }
</script>
<style scoped>
  .search-box input::-webkit-search-cancel-button { display: none; }
  .search-box input::-webkit-input-placeholder {
    color:#999;
  }
  .article-list{
    margin-top: 15px;
  }
  .article-option{
    margin-bottom: 7px;
    *zoom:1;
  }
  .article-option:after{
    content:"";
    display:block;
    height:0;
    clear:both;
  }
  .article-option .new-article, .article-option .radio-box{
    float: left;
    margin-right: 25px;
  }
  .article-option .radio-box button{
    float: left;
    color: #666;
  }
  .article-option .radio-box button.active{
    border-color: #d2d2d2;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15) inset;
    color: #333;
  }
  .article-option .radio-box button:first-child{
    border-right: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .article-option .radio-box button:nth-child(2),.article-option .radio-box button:nth-child(3){
    border-right: 0;
    border-radius: 0;
  }
  .article-option .radio-box button:last-child{
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .article-option .search-box, .article-option .search-box button, .article-option .search-box input{
    float: right;
  }
  .article-option .search-box input{
    padding: 6px 0;
    width: 200px;
    border:1px solid #e5e6e7;
    font-size: 12px;
    color: #666;
    text-indent: 1em;
  }
  .article-list table{
    font-size: 13px;
    color: #676a6c;
    border-spacing: 0;
    border-collapse: collapse;
    text-align: left;
  }
  .article-list table tbody>tr:nth-of-type(odd) {
    background-color: #f9f9f9;
  }
  .article-list table tr th,.article-list table tr td{
    padding: 8px;
  }
  .article-list table tr th{
    border-bottom: 1px solid #ddd;
  }
  .article-list table tr td{
    border-top: 1px solid #e7eaec;
    line-height: 1.4;
  }
  .article-list table tr td span{
    margin-right: 5px;
  }
  .check-all{
    font-weight: normal;
  }
  .ic-check{
    float: left;
    margin-top: 3px;
    font-size: 18px;
  }
</style>
