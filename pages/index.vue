<template>
	<div class="container">
		<section class="hello">
			<div class="hello__img-wrap">
				<ImgLazy src="img/man.jpg" alt="Дмитрий" class="hello__img" />
			</div>
			<div class="hello__info">
				<p>Front-End Web Developer
				<br/>г. Москва</p>
				<SocLinks></SocLinks>
			</div>
		</section>

		<section class="section">
			<h2>Технологии</h2>
			<div class="skills">
				<div class="skills__block">
					<p><b class="skills__type">Frontend: </b><span class="skills__list">Vue.js, Nuxt.js, ES6, Axios<br/>JavaScript, Ajax, JSON, jQuery<br/>CSS, Sass, BEM<br/>HTML, Xsl, XML</span></p>
					<p><b class="skills__type">Backend: </b><span class="skills__list">PHP, MySQL, CMS</span></p>
				</div>
				<div class="skills__block">
					<p><b class="skills__type">Сборка: </b><span class="skills__list">Nuxt, Vue-cli, Gulp</span></p>
					<p><b class="skills__type">Оптимизация: </b><span class="skills__list">Mobile First, Lazy Load,<br/>SEO, Google&nbsp;PageSpeed</span></p>
					<p><b class="skills__type">Прочее: </b><span class="skills__list">Git, Adobe Photoshop, Figma</span></p>
				</div>
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
export default {
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
	text-align: center
	&__img-wrap
		margin: 0 auto 20px
		width: 177px
		height: 177px
		font-size: 0
		overflow: hidden
		border-radius: 50%
	+media($s)
		display: flex
		align-items: center
		text-align: left
		&__img-wrap
			order: 1
			margin: 0 0 0 40px


.skills
	&__type
		float: left
		padding-right: 0.6em
	&__list
		display: block
		overflow: hidden

	+media($m)
		display: flex
		&__block
			width: 50%
			&+&
				padding: 0 0 0 20px
</style>
