<template>
    <ul id='tabbar'>
        <router-link
         tag="li"
        :to="item.path"
        active-class='sel'
        v-for='(item,index) in list'
        :key="index"
        >
            {{item.name}}
        </router-link>
    </ul>
</template>
<script>
export default {
    name:"Tabbar",
    data(){
        return {
            list:[
                {path:'/home',name:'首页'},
                {path:'/nearby',name:'附近'},
                {path:'/find',name:'发现'},
                {path:'/shopcar',name:'订单'},
                {path:'/my',name:'我的'}
                ],
        }
    }
}
</script>
<style lang='less' scoped>
@import url('../../style/main.less');
#tabbar{
    position: fixed;
    left: 0;
	right: 0;
	bottom: 0;
    .h(50);
    z-index:999;
    display: flex;
    .fs(18);
    li{
        text-align:center;
        flex: 1;
        .lh(50);
    }
    .sel{
        background: @tabBg;
        color: @tabColor;
    }
}
</style>
