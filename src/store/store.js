import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export const store = new Vuex.Store({
    state: {
       counter : 0,
       years : [2020,2019,2018],



    }
});