<template>
    <div class="content">
        <div class="leftMenu">
          <app-item></app-item>
        </div>
        <div class="rightDiv">
          <text-list></text-list>
        </div>
    </div>
</template>

<script>
import AppItem from '../components/AppItem.vue';
import TextList from '../components/TextList.vue';
export default{
    components:{
        AppItem,
        TextList,
    },
    data (){
        return{
            items:[]
        }
    },
    created: function(){
      //发送get请求
      this.$http.get('http://localhost:8081/appItem/').then(function(res){
          this.items = res.body;  
      },function(){
          console.log('请求失败处理');
      }); 
    }
}
</script>
<style>
.content{
    width: 1228px;
    height: 100%;
    margin-right: auto;
    margin-left: auto;
}
.leftMenu{
    display: inline;
    float: left;
    width: 370px;
}
.rightDiv{
    display: inline;
    float: left;
    width: 570px;
    margin-left: 0px;
}
</style>
