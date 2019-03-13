<template>
    <div class="TextForm">
        <div class="texttitle">
            <router-link to="/Textcontent"><b><p>TextTitle, Hello World! Hi! Vue.js</p></b></router-link>
        </div>
        <div class="textcontext">
            <p>textcontexthahahahhah...ssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p>
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

<style>
.TextForm{
    border-bottom: 1px solid whitesmoke;
    margin-bottom: 10px;
    width: 100%;
    height: 120px;
}
.texttitle{
    width: 100%;
    height: 30px;
}
.texttitle p{
    float: left;
    height: 0px;
    font-size: 20px;
    margin-top: 5px;
    margin-bottom: 0px;
}
.textcontext{
    float: left;
    width: 100%;
    height: auto;
    text-align: left;
    margin-top: 3px;
}
.textcontext p{
    margin-top: 2px;
    margin-left: 5px;
    margin-bottom: 0px;
    
}
.texttype{
    margin-top:1px;
    float: left; 
    width: 100%;
    height: auto;
}
.type{
    background-color: whitesmoke;
    border: 4px solid whitesmoke;
    color:darkgrey;
    margin-top: 5px;
    margin-left: 20px;
    float: left;
    width: auto;
    height: auto;
}
.operate{
    float: left;
    margin-bottom: 10px;
}
.operate div{
    margin-top: 5px;
    margin-left: 20px;
    display: inline;
    float: left;
    
}
a{
    font-size: 6px;
    text-decoration: none;
    color: black;
}
</style>