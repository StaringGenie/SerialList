import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Uimini from 'uimini/dist/css/uimini.css'
import store from './store'

import App from './App.vue'
import router from './router'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/messaging'
import 'firebase/storage'

Vue.use(
    Vuelidate,
    Uimini)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    created() {
        // Your web app's Firebase configuration
        var firebaseConfig = {
            apiKey: "AIzaSyBV0aHr_znihvZIJ712txYNYh7mmmJVg7c",
            authDomain: "serial-list.firebaseapp.com",
            databaseURL: "https://serial-list.firebaseio.com",
            projectId: "serial-list",
            storageBucket: "",
            messagingSenderId: "65050334200",
            appId: "1:65050334200:web:cca7cdd7a133b8ad"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.$store.dispatch('loggedUser', user)
            }
            this.$store.dispatch('loadTasks')
        })
    },
    render: h => h(App)
}).$mount('#app')