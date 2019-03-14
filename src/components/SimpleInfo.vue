<template>
    <div class="simpleInfo">
        <div class="person">
            <img src="../assets/vuelogo.jpg" class="personImg">
        </div>
        <div class="info">
            <div class="info_name">
                <h2>昵称</h2>
            </div>
            <div class="info-message">
                <div class="message">粉丝 99+</div>
                <div class="message">博文 99+</div>
                <div class="message">动态 99+</div>
                <div class="message">关注 99+</div>
                <div class="message">视频 99+</div>
            </div>
            <div class="info_address">
                <i class="fa fa-map-marker">深圳市</i>
            </div>
            <div class="focus">
                <i class="fa fa-plus">点击关注TA</i>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style>
.simpleInfo{
    float: left;
    display: flex;
    width: 789px;
    padding: 14px;
    padding-left: 21px;
    padding-right: 21px;
    height: 108px;
    align-items: center;
    background-color: rgb(243, 211, 216);
    border: 2px solid pink;
}
.personImg{
    width: 100px;
    height: 100px;
}
.info{
    height: 100px;
    margin-left: 15px;
}
.info_name h2{
    text-align: left;
    margin-bottom: 0px;
    margin-top: 0px;
}
.message{ 
    float: left;
    margin-right: 15px;
    margin-bottom: 5px;
}
.info_address{
    text-align: left;
    margin-bottom: 5px;
}
.focus{
    text-align: left;
}
</style>
