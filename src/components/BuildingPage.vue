<template>
    <div class="buildingPage">
        <div class="skypng">
            <img src="../assets/sky.png">
        </div>
        <h1>网站正在创造中...</h1>
        <div class="craneGif">
            <img src="../assets/crane.gif">
        </div>
        <div class="visit">
            <router-link to="/index"style="text-decoration: none;"><label class="css_btn_class">进入施工现场</label></router-link>
        </div> 
    </div>
</template>
<script>
export default {
    
}
</script>

<style>
.buildingPage{
    width: 100%;
    height: 890px;
    padding-top: 29px;
    background-color: white;
}
.skypng{
    width: 100%;
    height: 200px;
    float: left;
    display: flex;
}
.skypng img{
    width: 100%;
    height: 200px;
}
.visit{
    display: flex;
    justify-content: space-around;
    margin-left: auto;
    margin-right: auto;
}
.buildstyle{
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    display: flex;
    text-align: center;
    font-size: 50px;
    align-items: center;
    justify-content:space-around;
    cursor: pointer;
    text-decoration: none;
}
.craneGif{
    width: 500px;
    height: 500px;
    display: flex;
    justify-content: space-around;
    margin-left: auto;
    margin-right: auto;
}
.css_btn_class {
    font-size:28px;
    font-family:Arial;
    font-weight:normal;
    -moz-border-radius:42px;
    -webkit-border-radius:42px;
    border-radius:42px;
    border:1px solid #dcdcdc;
    padding:9px 18px;
    text-decoration:none;
    background:-webkit-gradient( linear, left top, left bottom, color-stop(5%, #ededed), color-stop(100%, #dfdfdf) );
    background:-moz-linear-gradient( center top, #ededed 5%, #dfdfdf 100% );
    background:-ms-linear-gradient( top, #ededed 5%, #dfdfdf 100% );
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ededed', endColorstr='#dfdfdf');
    background-color:#ededed;
    color:#777777;
    display:inline-block;
    text-shadow:1px 1px 0px #ffffff;
    -webkit-box-shadow:inset 1px 1px 0px 0px #ffffff;
    -moz-box-shadow:inset 1px 1px 0px 0px #ffffff;
    box-shadow:inset 1px 1px 0px 0px #ffffff;
}.css_btn_class:hover {
    background:-webkit-gradient( linear, left top, left bottom, color-stop(5%, #dfdfdf), color-stop(100%, #ededed) );
    background:-moz-linear-gradient( center top, #dfdfdf 5%, #ededed 100% );
    background:-ms-linear-gradient( top, #dfdfdf 5%, #ededed 100% );
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#dfdfdf', endColorstr='#ededed');
    background-color:#fc6915;
}.css_btn_class:active {
    position:relative;
    top:1px;
}
</style>
