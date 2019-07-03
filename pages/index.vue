<template>
	<div class="container">
		<section class="hello">
			<div class="hello__img-wrap">
				<ImgLazy src="img/man.jpg" alt="Дмитрий" class="hello__img" />
			</div>
			<div class="hello__info">
				<p>Front-End Web Developer</p>
				<p>г. Москва</p>
				<socLinks></socLinks>
			</div>
		</section>

		<section class="section">
			<h2>Портфолио</h2>
			<PostsList :posts="postsLoaded" />
			<div class="center"><nuxt-link class="button" to="/portfolio/">Все работы</nuxt-link></div>
		</section>
	</div>
</template>

<script>
import socLinks from '@/components/SocLinks.vue'

export default {
	components: {
		socLinks
	},
	head() {
		let title = 'Dmitrii Lipatov',
			descr = 'Сайт-портфолио Дмитрия Липатова',
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
		store.dispatch('setH1', 'Дмитрий Липатов')
	},
	created() {
		this.$store.dispatch('posts/nuxtServerInit')
	},
	computed: {
		postsLoaded() {
			let posts = this.$store.getters['posts/getPostsLoaded']
			return posts.slice(0,6)
		}
	}
}
</script>

<style lang="sass">
.hello
	display: flex
	&__img-wrap
		order: 1
		width: 177px
		height: 177px
		margin-left: 40px
		font-size: 0
		overflow: hidden
		border-radius: 50%
</style>
