<template>
<div class="Headnavigation">
    <div class="navigationImg">
        <img src="./assets/google.png" id="Bloglog"/></th>
    </div>
    <div class="navigationSearch">
        <search></search>
    </div>
    <div class="navigation">
        <a href="#">首页</a>
    </div>
    <div class="navigation">
         <a href="#">论坛</a>
    </div>
    <div class="navigation">
         <a href="#">咨询</a>
    </div>
    <div class="navigation">    
         <a href="#">活动</a>
    </div>     
</div>
</template>
<script>
import Search from "./components/Search.vue";
export default {
    components:{
        Search,
    },
}
</script>

<style>
.Headnavigation{
    margin-top: -8px;
    width: 100%;
    height: 37px;
    display: flex;
    background-color: black;
}
#Bloglog{
    width: 70px;
    height: 30px;
}
.navigationSearch{
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: 15px;
}

.navigation{
    width: 3%;
    height: 37px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.navigationImg{
    display: flex;
    align-items: center;
    justify-content: space-around;

}
.navigation a{
    color: white;
    text-decoration: none;
}
</style>

