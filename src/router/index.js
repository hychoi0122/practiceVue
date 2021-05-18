import Vue from 'vue'
import Router from 'vue-router'
import bootstrap from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

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
            children : [
                { path:'menu1' , component : ()=> import('@/components/menu1')},
                { path:'menu2' , component : ()=> import('@/components/menu2')},
                { path:'menu3' , component : ()=> import('@/components/menu3')},
                { path:'menu4' , component : ()=> import('@/components/menu4')},
            ]
        },
        // {
        //     path:'/menu/menu1',
        //     name:'menu1',
        //     component : ()=> import('@/components/menu1')
        // },
        //
        // {
        //     path:'/menu/menu2',
        //     name:'menu2',
        //     component : ()=> import('@/components/menu2')
        // },
        // {
        //     path:'/menu/menu3',
        //     name:'menu3',
        //     component : ()=> import('@/components/menu3')
        // },
        // {
        //     path:'/menu/menu4',
        //     name:'menu4',
        //     component : ()=> import('@/components/menu4')
        // },
        //board

    ]



})

console.log(router);

export default router
