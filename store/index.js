export const state = () => ({
	h1: ''
})
export const mutations = {
	setH1(state, payload) {
		state.h1 = payload
	}
}
export const actions = {
	setH1({commit}, payload) {
		commit('setH1', payload)
	}
}
export const getters = {
	getH1(state) {
		return state.h1
	}
}