<template>
    <div id='home'>
        <div>{{home}}</div>
        <Banner></Banner>
        <Tabbar></Tabbar>
    </div>
</template>
<script>
import Tabbar from '../../common/Tabbar'
import Banner from '../../common/Banner'
export default {
    name:"Home",
    components:{Tabbar,Banner},
    data(){
        return {
            home:"home"
        }
    }
}
</script>
<style>

</style>
