<template>
    <div id='nearby'>
        {{nearby}}
        <Tabbar></Tabbar>
    </div>
</template>
<script>
import Tabbar from '../../common/Tabbar'
export default {
    name:"Nearby",
    components:{Tabbar},
    data(){
        return {
            nearby:"nearby"
        }
    }
}
</script>
<style>

</style>
