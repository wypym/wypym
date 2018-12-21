<template>
    <div id='err'>
        页面跳转错误，3秒后返回首页
    </div>
</template>
<script>
export default {
    name:"Err",
    created(){
        setTimeout(()=>{
            this.$router.push('/home')
        },3000)
    }
}
</script>
<style>

</style>
