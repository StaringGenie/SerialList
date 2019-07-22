import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Uimini from 'uimini/dist/css/uimini.css'
import store from './store'

import App from './App.vue'
import router from './router'

Vue.use(
    Vuelidate,
    Uimini)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')