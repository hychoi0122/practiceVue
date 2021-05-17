import Vue from 'vue'
import Router from 'vue-router'
import bootstrap from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(bootstrap)

const router = new Router({
    routes : [
        {
            path:'/',
            name:'HelloWorld',
            component : ()=> import('@/components/HelloWorld')
        }
    ]



})

export default router
