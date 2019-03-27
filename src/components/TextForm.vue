<template>
    <div class="TextForm">
        <div class="texttitle">
           <router-link to="/textcontent"><b><p>netty的心跳机制笔记</p></b></a></router-link>
        </div>
        <div class="textcontext">
            <p>使用 Netty 实现心跳机制的关键就是利用 IdleStateHandler 来产生对应的......</p>
        </div>
        <div class="texttype">
            <label class="type">工作日记</label>
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