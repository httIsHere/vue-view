import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 0,
    todos: [
        { id: 1, text: '...', done: true },
        { id: 2, text: '...', done: true },
        { id: 3, text: '...', done: false }
    ],
    articles:[
        { id: 1, title: 'xxxxx', content: 'kjgbjgsdehjgwhejhgwdjgfuiwyg', author: 'htt'},
        { id: 1, title: 'xxxxx', content: 'kjgbjgsdehjgwhejhgwdjgfuiwyg', author: 'htt'},
        { id: 1, title: 'xxxxx', content: 'kjgbjgsdehjgwhejhgwdjgfuiwyg', author: 'htt'},
        { id: 1, title: 'xxxxx', content: 'kjgbjgsdehjgwhejhgwdjgfuiwyg', author: 'htt'}
    ]
}
const getters = {
    doneTodos: state => {
        return state.todos.filter(todo => todo.done)
    }
}
const mutations = {
    cnt (state) {
        state.count++;
    },
    updateDate (state, data) {
        state.count = data
    }
}
const actions = {
    hhhh (context) {
        context.commit('cnt')
    }
}
export default new Vuex.Store({
    state,
    getters,
    mutations
})