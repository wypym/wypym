<template>
    <div id='shopcar'>
        {{Shopcar}}
        <Tabbar></Tabbar>
    </div>
</template>
<script>
import Tabbar from '../../common/Tabbar'
export default {
    name:"Shopcar",
    components:{Tabbar},
    data(){
        return {
            Shopcar:"Shopcar"
        }
    }
}
</script>
<style>

</style>
