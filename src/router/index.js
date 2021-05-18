import Vue from 'vue'
import Router from 'vue-router'
import bootstrap from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import routerPath from '@/routerPath/menu'

Vue.use(Router)
Vue.use(bootstrap)

const router = new Router({
    routes : [
        {
            path:'/',
            name:'index',
            component : ()=> import('@/components/index')
        },
        {
            path:'/menu',
            name:'menu',
            component : ()=> import('@/menu/menuFrame'),
            children : routerPath.menu
        },
    ]

})

export default router
