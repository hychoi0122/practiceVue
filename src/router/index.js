import Vue from 'vue'
import Router from 'vue-router'
import bootstrap from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import menuList from '@/routerPath/menu'


Vue.use(Router)
Vue.use(bootstrap)
// menu //
// board //
// board2//

const router = new Router({

    routes : [
        {
            path:'/',
            name:'HelloWorld',
            component : ()=> import('@/components/HelloWorld')
        },

        {
            path:'/menu',
            name:'menu',
            component : ()=> import('@/components/menu'),
            children : menuList

        },


    ]



})

console.log(router);

export default router
