<template>
	<div class="container">
		<postsList :posts="postsLoaded" />
		<!-- <button @click="addPost">dd</button> -->
	</div>
</template>

<script>
export default {
	head() {
		let title = 'Мое Портфолио',
			descr = 'Список работ',
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
	fetch({store}) {
		store.dispatch('setH1', 'Портфолио')
	},
	created() {
		this.$store.dispatch('posts/nuxtServerInit')
	},
/*
	methods: {
		
		addPost(){
			this.$store.dispatch('posts/addPost', {
				title: 'Консалтинг',
				color: '#ddd',
				type: 'Информационный сайт',
				img: 'img/posts/pvcg.jpg',
				link: '',
				descr: '',
				role: 'Разработка + Дизайн внутренних',
				tools: 'gulp, sass',
				sort: 10
			})
		}		
	},
*/
	computed: {
		postsLoaded() {
			return this.$store.getters['posts/getPostsLoaded']
		}
	}
}
</script>