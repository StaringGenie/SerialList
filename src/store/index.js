import Vue from 'vue'
import Vuex from 'vuex'
import task from './Task'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        task
    }
})