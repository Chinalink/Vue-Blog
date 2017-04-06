<template>
  <div class="article-list">
    <table>
			<thead>
				<tr>
					<th style="width:60px;">
            <div class="">
              <input type="checkbox" name="" value="">
            </div>
          </th>
          <th style="width:495px;">标题</th>
          <th style="width:125px;">作者</th>
          <th style="width:200px;">分类目录</th>
          <th style="width:220px;">标签</th>
          <th style="width:100px;">评论数</th>
          <th style="width:120px;">日期</th>
				</tr>
			</thead>
			<tbody v-for="article in articles" :key="elem.key">
				<tr>
					<td><input type="checkbox" name="" value=""></td>
          <td>{{ article.title }}</td>
          <td>{{ article.author }}</td>
          <td>{{ article.categories }}</td>
          <td>{{ article.tags }}</td>
          <td>{{ article.comments }}</td>
          <td>{{ article.date }}</td>
				</tr>
			</tbody>
		</table>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    }
  }
</script>
<style media="screen">
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
</style>
