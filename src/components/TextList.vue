<template>
    <div class="textList">
        <div class="testtitle">
            <text-title></text-title>
        </div>
        <div class="textform">
            <text-form/>
            <text-form/>
            <text-form/>
            <text-form/>
            <text-form/>
            <text-form/>
            <text-form/>
            <text-form/>
            <text-form/>
        </div>
        <div class="tip">
            <p>没有更多内容显示</p>
        </div>
    </div>
</template>
<script>
import TextTitle from "../components/TextTitle.vue";
import TextForm from "../components/TextForm.vue";
export default {
    components:{
        TextTitle,
        TextForm,
    },
}
</script>

<style>
.textList{
    background-color: white;
    padding: 15px;
    padding-top: 0px;
    width: 829px;
    height: auto;
}
.textform{
    width: 100%;
    height: auto;
}
.tip{
    margin: 30px;
}
</style>
