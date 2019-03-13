<template>
  <div >
    <div class = "title"><h1 >Book Demo</h1></div><br><br><br><br><br>
    <div id="vue">
      <router-link to="/Hello"><span class="right">返回首页</span></router-link>
      <h1>书本信息：</h1>
      <div v-if="Object.keys(bookList).length==0" id ="NothingToShow"><h1>Nothing To Show</h1></div>
      <div  v-else>
        <table class="table"> 
          <thead>
            <tr>
              <th>Id:</th> 
              <th>Reader:</th>
              <th>Isbn:</th> 
              <th>Title:</th> 
              <th>Author:</th> 
              <th>Description:</th>
            </tr>
            <tr v-for="book in bookList" >
              <th>{{book.id}}</th> 
              <th>{{book.reader}}:</th>
              <th>{{book.isbn}}:</th> 
              <th>{{book.title}}:</th> 
              <th>{{book.author}}:</th> 
              <th>{{book.description}}:</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  </div>
</template>


<script type="text/javascript">
  export default { //这里需要将模块引出，可在其他地方使用
    name: "HelloVue",
    data (){ //注意：data即使不需要传数据，也必须return,否则会报错
      return {
        bookList: [],

      }
    },
    created: function(){
      //发送get请求
      this.$http.get('http://localhost:8081/demo/').then(function(res){
          this.bookList = res.body;    
      },function(){
          console.log('请求失败处理');
      }); 
    }
  }
</script>
<style type="text/css">
  #vue{
    color: green;
    font-size: 25px;
  }
  .NothingToShow{
   text-align: center;
   color: black; 
  }
  .title{text-align:left;
   float:left;
   font-size: 25px}

  .right{text-align:right; 
    float: right;
    color: green;
    font-size: 20px;}

  .table{width: 100%; }
</style>
