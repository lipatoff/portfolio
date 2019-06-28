<template>
	<div class="container">

	</div>
</template>

<script>
export default {
	head() {
		let title = 'My site',
			descr = 'My SSR site! With Nuxt.js',
			type = 'site'

		return {
		title: title,
		meta: [
			{ hid: 'og:title', name: 'og:title', content: title },
			{ hid: 'description', name: 'description', content: descr },
			{ hid: 'og:description', name: 'og:description', content: descr },
			{ hid: 'og:type', name: 'og:type', content: type },
		]
		}
	},
	created() {
		this.$store.dispatch('setH1', 'Title')
		//this.$store.dispatch('posts/nuxtServerInit')
	},
/*
	computed: {
		postsLoaded() {
			return this.$store.getters['posts/getPostsLoaded']
		}
	}
*/
}
</script>