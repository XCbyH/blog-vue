<template>
<div class="TextSearch">
    <form class="SearchForm">
        <div class="SearchInput">
            <input type="text" placeholder="输入关键字">
        </div>
        <i class="fa fa-search" style=""></i>
    </form>
</div>
</template>
<script>
export default {

}
</script>
</script>

<style>
.TextSearch{
    width: 100%;
    height: 30px;
    float: left;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    border: 1px solid darkgrey;
}
.SearchInput{
    float: left;
}
.SearchInput input{
    outline:none;
    border:0px;
    margin-left: 5px
}
.SearchForm i{
    background-color: white;
    margin-right:5px;
}
</style>

