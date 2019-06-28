<template>
	<div class="container">
		<postsList :posts="postsLoaded" />
	</div>
</template>

<script>
import postsList from '@/components/Posts/PostsList.vue'

export default {
	components: {
		postsList
	},
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
	created() {
		this.$store.dispatch('setH1', 'Портфолио')
		this.$store.dispatch('posts/nuxtServerInit')
	},
	methods: {
		/*
		addPost(){
			this.$store.dispatch('posts/addPost', {
				title: 'Языковые курсы',
				type: 'Сайт-витрина',
				img: 'img/posts/classtrip.jpg',
				link: 'classtrip.ru/',
				descr: 'Каталог языковых курсов в США с поиском и подробным фильтром.<br/>Сайт предствален на нескольких языках: русском, английском, китайском и португальском.',
				role: 'Разработка сайта',
				tools: 'gulp, sass, mobile first, lazy load, ajax',
				sort: 200
			})
		}
		*/
	},
	computed: {
		postsLoaded() {
			return this.$store.getters['posts/getPostsLoaded']
		}
	}
}
</script>