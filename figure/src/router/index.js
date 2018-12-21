import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/Home/Home'
import My from '../components/pages/My/My'
import Nearby from '../components/pages/Nearby/Nearby'
import Find from '../components/pages/Find/Find'
import Shopcar from '../components/pages/Shopcar/Shopcar'
import Err from '../components/common/Err'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect: '/home'},
    {path: '/home',component: Home},
    {path: '/my',component: My},
    {path: '/nearby',component: Nearby},
    {path: '/find',component: Find},
    {path: '/shopcar',component: Shopcar},
    {path: '**',component: Err},
  ]
})
