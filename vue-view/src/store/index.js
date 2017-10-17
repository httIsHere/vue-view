import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    articles:[
        { title: 'xxxxx', content: 'kjgbjgsdehjgwhejhgwdjgfuiwyg', author: 'htt', show: true, draft: false},
        { title: 'xxxxx', content: 'kjgbjgsdehjgwhejhgwdjgfuiwyg', author: 'htt', show: true, draft: false},
        { title: 'xxxxx', content: 'kjgbjgsdehjgwhejhgwdjgfuiwyg', author: 'htt', show: true, draft: false},
        { title: 'xxxxx', content: 'kjgbjgsdehjgwhejhgwdjgfuiwyg', author: 'htt', show: true, draft: false}
    ]
}
const getters = {
}
const mutations = {
	ADD_NOTE (state, title, content) {
		const newNote = {
			title: title,
			content: content,
			author: 'htt',
			show: true,
			draft: false
		}
		state.articles.push(newNote)
	}
}
const actions = {
}
export default new Vuex.Store({
    state,
    getters,
    mutations
})