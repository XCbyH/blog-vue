<template>
  <div class="item" >
      <div class="picture">
        <img class="pictureImg" src="../assets/vuelogo.jpg" >
      </div>
      <div><p>UserName</p></div>
      <div class="operation3"><button>操作一</button></div>
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
      <div >
        <div class="operationone"><button>操作一</button></div>
        <div class="operationtwo"><button>操作一</button></div>
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
</style>