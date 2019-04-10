<template>
  <div class="item" >
      <div class="picture">
        <img class="pictureImg" src="../assets/vuelogo.jpg" >
      </div>
      <div><p>UserName</p></div>
      <div class="usersetting">
        <a href="#" ><label > &nbsp;账号设置</label></a>
      </div>
      <div class="leftbox">
        <table class="userlist">
            <tr>
              <div class="listvalue">
                  <td><span>123</span></td>
                  <td><span>456</span></td>
                  <td><span>789</span></td>
                  <td><span>111</span></td>
              </div>
            </tr>
            <tr>
              <div class="listtitle">
                  <td><a href="#">积分</a></td>
                  <td><a href="#">粉丝</a></td>
                  <td><a href="#">关注</a></td>
                  <td><a href="#">收藏</a></td>
              </div>
            </tr>
        </table>
      </div>
      <div id="operation">
        <div class="write">
          <a href="#" ><label > &nbsp;编写文章</label></a>
        </div>
        <div class="draft">
          <a href="#" ><label > &nbsp;草稿箱（0）</label></a>
        </div>
      </div>
      <div>
        <h3>统计</h3>
        <div class="jilu">
          <span>今日访问：0</span><br>
          <span>昨日访问：0</span><br>
          <span>本周访问：0</span><br>
          <span>本月访问：0</span><br>
          <span>所有访问：0</span><br>
          <span>最近登录：2019-3-11</span><br>
        </div>
      </div>
      <div class="advert">
        <p>扫一扫二维码，关注公众号获得最新资讯</p>
        <img class="erweima" src="../assets/vuelogo.jpg">
      </div>
        <p style="float:left;margin:0px;margin-top:20px;">联系方式：137XXXXXXXX</p>
        <p style="float:left;margin:0px">公司地址：深圳市南山区科学园BX栋X层门牌号XXX-XX</p>
  </div>
</template>

<script>

export default {

  props: {
    item:{
      type:Object,
      required:true

    }
  },
  filters: {
    usRmb: function(value) {
      return `￥${value}`;
    }
  },
  methods: {
    addItem(){

    }
  },
  data(){
    return{
      imgSrc : require('../assets/'+this.item.catagory+'.png')
    }
  },
};
</script>

<style scoped>
  @import "../style/blog_vue.css";
.usersetting label{
  font-size: 20px;
  padding: 5px;
  border: 1px solid darkgray;
  justify-content: space-around;
  background-color:whitesmoke;
  color: darkgray;
}
.listtitle a{
  font-size: 18px;
}
.write{
  margin-bottom: 10px;
  width: auto;
  height: auto;
}
.write label{
  width: 118px;
  height: 26px;
  font-size: 20px;
  padding: 5px;
  border: 1px;

  justify-content: space-around;
  background-color: green;
  color:white;
}
.draft{
  margin-bottom: 10px;
    width: auto;
  height: auto;
}
.draft label{
  width: 118px;
  height: 26px;
  font-size: 20px;
  padding: 5px;
  border: 1px solid darkgray;
  justify-content: space-around;
  background-color:whitesmoke;
  color:darkgray;
}
</style>