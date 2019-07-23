import firebase from 'firebase/app'
/* eslint-disable */

export default {
    state: {
        user: null
    },
    mutations: {

    },
    actions: {
        async registreUser({ commit }, { email, password }) {
            const user = await firebase.auth().createUserWithEmailAndPassword(email, password)

        }
    },
    getters: {
        user(state) {
            return state.user
        },
        checkuser(state) {
            return state.user !== null
        }
    }
}