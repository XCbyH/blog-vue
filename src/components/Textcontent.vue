<template>
  <div class="Textcontent">
    <div class="currentpath">
        <router-link to="/index" style="margin-left:0px;">用户姓名</router-link>
        <label class="pathImg">></label>
        <a href="#">日志类型</a>
        <label class="pathImg">></label>
        <a href="#">正文</a>
    </div>
    <div class="title">
      <p class="titlecontent"><b>netty的心跳机制笔记</b></p>
    </div>
    <div class="tools">
      <div>
        <a href="#"><img src="..\assets\vuelogo.jpg" class="userpicture"></a>
      </div>
      <div style="margin-left: 2px;margin-right: 10px;">username发布于</div>
      <div style="margin-top:7px; margin-left:0px;">03/11 11.15</div>
      <div>字数 100</div>
      <div>阅读 99+</div>
      <div>评论 99+</div>
      <div>点赞 99+</div>
      <div>收藏 99+</div>
      <div> <a href="#"><i class="fa fa-pencil-square-o">编辑</i></a></div>
      <div> <a href="#"><i class="fa fa-times">删除</i></a></div>
    </div>
    <div class="content">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用 Netty 实现心跳机制的关键就是利用 IdleStateHandler 来产生对应的 idle 事件.
      一般是客户端负责发送心跳的 PING 消息, 因此客户端注意关注 ALL_IDLE 事件, 在这个事件触发后, 客户端需要向服务器发送 PING 消息, 告诉服务器"我还存活着".
      服务器是接收客户端的 PING 消息的, 因此服务器关注的是 READER_IDLE 事件, 并且服务器的 READER_IDLE 间隔需要比客户端的 ALL_IDLE 事件间隔大(例如客户端ALL_IDLE 是5s 没有读写时触发, 因此服务器的 READER_IDLE 可以设置为10s)
      当服务器收到客户端的 PING 消息时, 会发送一个 PONG 消息作为回复. 一个 PING-PONG 消息对就是一个心跳交互.
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用 Netty 实现心跳机制的关键就是利用 IdleStateHandler 来产生对应的 idle 事件.
      一般是客户端负责发送心跳的 PING 消息, 因此客户端注意关注 ALL_IDLE 事件, 在这个事件触发后, 客户端需要向服务器发送 PING 消息, 告诉服务器"我还存活着".
      服务器是接收客户端的 PING 消息的, 因此服务器关注的是 READER_IDLE 事件, 并且服务器的 READER_IDLE 间隔需要比客户端的 ALL_IDLE 事件间隔大(例如客户端ALL_IDLE 是5s 没有读写时触发, 因此服务器的 READER_IDLE 可以设置为10s)
      当服务器收到客户端的 PING 消息时, 会发送一个 PONG 消息作为回复. 一个 PING-PONG 消息对就是一个心跳交互.
    </div>
    <div class="auth">
      © 著作权归作者所有
    </div>
    <div class="action">
      <div class="action_reward" style="border-left: 1px;">
        <a href="#" id="reward"><label for="reward" style="background-color:#32aa66;color:white;"><i class="fa fa-money"> &nbsp;打赏</i></label></a>
      </div>
      <div class="action_thumbs-up">
         <a href="#"><label><i class="fa fa-thumbs-o-up"> &nbsp;点赞</i></label></a>
      </div>
      <div class="action_Collection">
         <a href="#" ><label><i class="fa fa-heart-o"> &nbsp;收藏</i></label></a>
      </div>
      <div class="action_forward">
         <a href="#"><label><i class="fa fa-share"> &nbsp;转发</i></label></a>
      </div>
      <div class="tip-offs">
         <a href="#"><i class="fa fa-flag" style="float:left;color:red;font-size:15px;margin-top: 20px;"> &nbsp;<span style="color:black;display:inline;">举报</span></i></a>
      </div>
    </div>
    <div class="upOrdownPage">
      <div class="upPage">
        <<上一篇 <a href="#">关于cnpm命令无响应</a>
      </div>
      <div class="downPage">
        <a href="#">Vue.js的安装和使用</a> 下一篇>>
      </div>
    </div>
    <div class="personinfo">
      <simpleinfo></simpleinfo>
    </div>
    <div class="orthertitles" > 
        <span>相关文章</span>&nbsp;
        <span>最新文章</span>
    </div>
    <div class="orthertexts">
      <div class="demo1" >
        <text-form/>
      </div>
      <div class="demo1">
        <text-form/> 
      </div>
      <div class="demo1">
        <text-form/>
      </div>
    </div>
    <div class="loadmore">
      <label>加载更多文章</label>
    </div>
  </div>
</template>

<script>
import Simpleinfo from '../components/SimpleInfo.vue';
import TextForm from '../components/TextForm.vue';
export default {
  components:{
    Simpleinfo,
    TextForm,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @import "../style/blog_vue.css";
.auth{
  margin-top: 30px;
  width: 100%;
  height: auto;
  float: left;
}
.action{
  width: 100%;
  float: left;
  height: 50px;
  margin-top: 15px;
  margin-left: 100px;
}
.action label{
  display: inline;
  width: 159px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 45px;
  float: left;
  font-size: 20px;
  border: 1px solid rgb(214, 213, 213);
}
.tip-offs{
  float: left;
  margin-left: 220px;
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  color: black;
}
.upOrdownPage{
 margin-top: 50px;
 float: left;
 width: 100%;
 height: 40px;
}
.upOrdownPage a{
  padding: 5px;
  color: darkgreen;
  font-size: 18px;
}
.upPage{
  float: left;
}
.downPage{
  float: right;
}
.personinfo{
  float: left;
}
.title {
  width: 100%;
  height: 30px;
  margin-top: 0px;
  margin-left: 0px;
}
.titlecontent{
  font-size: 23px;
  text-align: left;
  margin-top: 0px;
  margin-bottom: 0px;
  color: black;
  width: 100%;
  height: 30px;
}
.orthertitles{
  text-align: left;
  float: left;
  width: 100%;
  height: 30px;
  font-size: 20px;
  margin-top: 15px;
  margin-bottom: 0px;
  padding: 5px;
  color: green;
  border-bottom: 1px solid whitesmoke;
}
.demo1{
  float: left;
}
.loadmore{
  float: left;
  width: 100%;
  height: 50px;
  display:flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
}
.loadmore label{
  width: auto;
  height: auto;
  padding: 5px;
  background-color: whitesmoke;
  color: darkgray;
}
</style>