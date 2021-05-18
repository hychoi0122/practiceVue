import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export const store = new Vuex.Store({
    state: {
       counter : 0,
       years : [2020,2019,2018],
       menuList : [
           {menuName:'MENU1', value :1 , urlPath : '/menu/menu1'},
           {menuName:'MENU2', value :2 , urlPath : '/menu/menu2'},
           {menuName:'MENU3', value :3 , urlPath : '/menu/menu3'},
           {menuName:'MENU4', value :4 , urlPath : '/menu/menu4'}
       ],




    }
});