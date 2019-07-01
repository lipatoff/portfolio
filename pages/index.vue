<template>
	<div class="container">
		<p>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Океана, первую толку строчка курсивных ты обеспечивает предложения, выйти домах переписали, взгляд дороге послушавшись за они семь все последний что?</p>
		<p>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Океана, первую толку строчка курсивных ты обеспечивает предложения, выйти домах переписали, взгляд дороге послушавшись за они семь все последний что?</p>
		<p>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Океана, первую толку строчка курсивных ты обеспечивает предложения, выйти домах переписали, взгляд дороге послушавшись за они семь все последний что?</p>
		<p>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Океана, первую толку строчка курсивных ты обеспечивает предложения, выйти домах переписали, взгляд дороге послушавшись за они семь все последний что?</p>
		<h2>Портфолио</h2>
		<postsList :posts="postsLoaded" />
		<div class="center"><nuxt-link class="button" to="/portfolio/">Все работы</nuxt-link></div>
	</div>
</template>

<script>
import postsList from '@/components/Posts/PostsList.vue'

export default {
	components: {
		postsList
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
	created() {
		this.$store.dispatch('setH1', 'Дмитрий Липатов')
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