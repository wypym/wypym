<template>
    <div id='my'>
        {{my}}
        <Tabbar></Tabbar>
    </div>
</template>
<script>
import Tabbar from '../../common/Tabbar'
export default {
    name:"My",
    components:{Tabbar},
    data(){
        return {
            my:"my"
        }
    }
}
</script>
<style>

</style>
