<template>
    <div id='banner'>
        <el-carousel arrow="never">
        <el-carousel-item v-for="item in 4" :key="item">
            <div class="box">
                {{item}}
            </div>
        </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
export default {
    name:"Banner",
}
</script>
<style lang="less" scoped>
@import url('../../style/main.less');
#banner{
    width: 100%;
    .box{
        width: 100%;
        .h(200);
    }
}
  
</style>
