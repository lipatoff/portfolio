import axios from 'axios'

export const state = () => ({
	postsLoaded: []
})
export const mutations = {
	setPosts(state, posts){
		state.postsLoaded = posts
	},
	addPost(state, post) {
		state.postsLoaded.push(post)
	}
}
export const actions = {
	//nuxt сам запускает данный экшн при инициализации
	nuxtServerInit({commit}, context) {
		return axios.get('https://portfolio-48530.firebaseio.com/posts.json')
			.then(res=>{
				const postsArray = []
				for (let key in res.data) {
					postsArray.push({ ...res.data[key], id: key })
				}
				postsArray.sort((a,b) => {
					if (a.sort < b.sort) return 1
					return -1
				})
				// Res
				commit('setPosts', postsArray)
			})
			.catch(e=>console.log(e))
	},

/*
	addPost({commit}, post) {
		return axios.post('https://portfolio-48530.firebaseio.com/posts.json', post)
			.then(res=>{
				commit('addPost', {...post, id: res.data.name})
			})
			.catch(e=>console.log(e))
	}
*/
}
export const getters = {
	getPostsLoaded(state) {
		return state.postsLoaded
	}
}