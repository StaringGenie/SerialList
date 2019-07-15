 export default {
     state: {
         tasks: [{
                 id: 1,
                 title: 'Game of Thrones',
                 description: 'winter is coming...',
                 whatWatch: 'Serial',
                 completed: true,
                 editing: false
             },
             {
                 id: 2,
                 title: 'Forrest Gump',
                 description: 'Run, Forrest',
                 whatWatch: 'Film',
                 completed: false,
                 editing: false
             }
         ]
     },
     mutations: {
         newTask(state, payload) {
             state.tasks.push(payload)
         }
     },
     actions: {
         newTask({ commit }, payload) {
             payload.id = Math.random()
             commit('newTask', payload)
         }
     },
     getters: {
         tasks(state) {
             return state.tasks
         }

     }
 }