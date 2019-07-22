export default {
    state: {
        tags: [{
                title: 'Comedy',
                use: false
            },
            {
                title: 'Adventure',
                use: false
            },
            {
                title: 'Detective',
                use: false
            },
            {
                title: 'Drama',
                use: false
            },
            {
                title: 'History',
                use: false
            },
            {
                title: 'Melodrama',
                use: false
            },
            {
                title: 'Tragedy',
                use: false
            },
            {
                title: 'Fantasy',
                use: false
            }
        ]
    },
    mutations: {
        newTag(state, payload) {
            state.tags.push(payload)
        }
    },
    actions: {
        newTag({ commit }, payload) {
            commit('newTag', payload)
        }
    },
    getters: {
        tags(state) {
            return state.tags
        }
    }
}