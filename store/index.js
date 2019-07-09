export const state = () => ({
	h1: ''
})
export const mutations = {
	setH1(state, payload) {
		state.h1 = payload
	}
}
export const actions = {
	async nuxtServerInit({ dispatch }) {
		await dispatch('posts/nuxtServerInit')
	},

	setH1({commit}, payload) {
		commit('setH1', payload)
	}
}
export const getters = { }