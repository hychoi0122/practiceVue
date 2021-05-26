import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export const store = new Vuex.Store({
    state: {
       counter : 0,
       thisYear : new Date().getFullYear(),
        menuList : [
           {menuName:'TEST PAGE', value :1 , urlPath : '/menu/testPage'},
           {menuName:'CODE REVIEW', value :2 , urlPath : '/menu/codeReview'},
           {menuName:'MENU3', value :3 , urlPath : '/menu/menu3'},
           {menuName:'MENU4', value :4 , urlPath : '/menu/menu4'}
       ],


    }
});