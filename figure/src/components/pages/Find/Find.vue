<template>
    <div id='find'>
        {{find}}
        <Tabbar></Tabbar>
    </div>
</template>
<script>
import Tabbar from '../../common/Tabbar'
export default {
    name:"Find",
    components:{Tabbar},
    data(){
        return {
            find:"find"
        }
    }
}
</script>
<style>

</style>
