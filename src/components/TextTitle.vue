<template>
<div class="TextTitle">
    <div class="title" > 
        <a href="#" style="margin-right: 1px;">全部文章</a>
        <i class="fa fa-sort-desc"style="margin-right: 50px;color: darkgreen;"></i>
        <a href="#">热门文章</a>
        <a href="#">动态</a>
        <a href="#">视频</a>
    </div>
    <div class="search">
        <text-search></text-search>
    </div>
</div>
</template>
<script>
import TextSearch from "../components/Search.vue";
export default {
    components:{
        TextSearch,
    },
}
</script>

<style>
.TextTitle{
    margin-top: 0px;
    height: 50px;
    border: 1px solid whitesmoke;
    border-left: 0px;
    border-right: 0px;
}
.routers {
    font-size: 20px;
    color: white;
    text-decoration: none;
  }
.title{
    margin-top: 15px;
    text-align: left;
    height: 29px;
    float: left;
    margin-left: 20px;
    color:black;
}
.title a{
    text-decoration: none;
    color: darkgreen;
    margin-right: 50px;
    font-size: 20px;
}
.search{
    width: 200px;
    height: 30px;
    float: left;
    margin-right:20px;
}
</style>

