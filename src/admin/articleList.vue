<template>
  <div class="article-list">
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
            <router-link class="btn btn-success" :to="{ name: 'index'}">编辑</router-link>
            <button class="btn btn-primary">预览</button>
            <button class="btn btn-danger">删除</button>
          </td>
				</tr>
			</tbody>
		</table>
  </div>
</template>

<script>
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
    }
  }
</script>
<style scoped>
  .article-list{
    margin-top: 15px;
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
  .btn{
    padding: 2.5px 5px;
    border-width: 1px;
    border-style: solid;
    border-radius: 3px;
    font-size: 12px;
    color: #fff;
  }
  .btn-success{
    border-color:#1a7bb9;
    background-color:#1a7bb9;
  }
  .btn-primary{
    border-color:#18a689;
    background-color:#18a689;
  }
  .btn-danger{
    border-color:#ec4758;
    background-color:#ec4758;
  }
</style>
