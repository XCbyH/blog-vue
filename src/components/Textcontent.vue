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
      <p class="titlecontent"><b>假设标题长度这么长</b></p>
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
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;党的十八大提出，倡导富强、民主、文明、和谐，倡导自由
      、平等、公正、法治，倡导爱国、敬业、诚信、友善，积极培育和践行社会主义核心价值观。富强、民主、文明、和谐是国家层面的价值目标，自由、平等、公正、法治是社会层面的价值取向，爱国、敬业、诚信、友善是公民个人层面的价值准则，这24个字是社会主义核心价值观的基本内容。
      “爱国、敬业、诚信、友善”，是公民基本道德规范，是从个人行为层面对社会主义核心价值观基本理念的凝练。它覆盖社会道德生活的各个领域，是公民必须恪守的基本道德准则，也是评价公民道德行为选择的基本价值标准。爱国是基于个人对自己祖国依赖关系的深厚情感，也是调节个人与祖国关系的行为准则。它同社会主义紧密结合在一起，要求人们以振兴中华为己任，促进民族团结、维护祖国统一、自觉报效祖国。敬业是对公民职业行为准则的价值评价，要求公民忠于职守，克己奉公，服务人民，服务社会，充分体现了社会主义职业精神。诚信即诚实守信，是人类社会千百年传承下来的道德传统，也是社会主义道德建设的重点内容，它强调诚实劳动、信守承诺、诚恳待人。友善强调公民之间应互相尊重、互相关心、互相帮助，和睦友好，努力形成社会主义的新型人际关系。
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;党的十八大提出，倡导富强、民主、文明、和谐，倡导自由
      、平等、公正、法治，倡导爱国、敬业、诚信、友善，积极培育和践行社会主义核心价值观。富强、民主、文明、和谐是国家层面的价值目标，自由、平等、公正、法治是社会层面的价值取向，爱国、敬业、诚信、友善是公民个人层面的价值准则，这24个字是社会主义核心价值观的基本内容。
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
        <<上一篇 <a href="#">党的十八大提出</a>
      </div>
      <div class="downPage">
        <a href="#">倡导自由</a> 下一篇>>
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