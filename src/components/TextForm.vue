<template>
    <div class="TextForm">
        <div class="texttitle">
           <router-link to="/textcontent"><b><p>TextTitle, Hello World! Hi! Vue.js</p></b></a></router-link>
        </div>
        <div class="textcontext">
            <p>党的十八大提出，倡导富强、民主、文明、和谐，倡导自由 、平等、公正、法治，倡导爱国、敬业、诚信、友善......</p>
        </div>
        <div class="texttype">
            <label class="type">testtype</label>
        </div>
        <div class="operate">
            <div style="margin-left: 2px;">日志类型</div>
            <div style="margin-top:9px;">03/11 11.15</div>
            <div> <a href="#">浏览次数(99+)</a></div>
            <div> <a href="#">评论次数(99+)</a></div>
            <div> <a href="#">编辑</a></div>
            <div> <a href="#">删除</a></div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>

<style scoped>
  @import "../style/blog_vue.css";
</style>