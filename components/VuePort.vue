<template>
	<ul class="vueworks">
		<li v-for="(item, index) in items"
			:key="index"
			class="vueworks__item">
			<span v-html="logos[item.type]" class="vueworks__logo"></span>
			{{ item.title }}
			<a :href="item.repo" class="vueworks__link" target="_blank"><svg class="vueworks__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 0a8 8 0 0 0-2.5 15.6c.4 0 .5-.2.5-.4v-1.5c-2 .4-2.5-.5-2.7-1 0-.1-.5-.9-.8-1-.3-.2-.7-.6 0-.6.6 0 1 .6 1.2.8.7 1.2 1.9 1 2.4.7 0-.5.2-.9.5-1-1.8-.3-3.7-1-3.7-4 0-.9.3-1.6.8-2.2 0-.2-.3-1 .1-2 0 0 .7-.3 2.2.7a7.4 7.4 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.5 1.1.2 2 .1 2.1.5.6.8 1.3.8 2.2 0 3-1.9 3.7-3.6 4 .3.2.5.7.5 1.4v2.2c0 .2.1.5.5.4A8 8 0 0 0 16 8a8 8 0 0 0-8-8z"></path></svg></a>
			<a v-if="item.link" :href="item.link" class="vueworks__link" target="_blank"><svg class="vueworks__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480"><path d="M240 0a240 240 0 0 0 0 480 240 240 0 1 0 0-480zm206 152H340c-6-22-15-44-26-64h90c18 19 32 40 42 64zM240 19c18 15 33 33 46 53h-92c13-20 29-38 46-53zm-65 53H92c35-31 80-50 126-55-16 17-31 35-43 55zm87-55c47 5 91 24 126 55h-83c-12-20-27-38-43-55zm34 71c12 20 21 42 27 64H157c6-22 16-44 27-64zM76 88h90c-11 20-20 42-26 64H34c10-24 24-45 42-64zm-48 80h424c16 47 16 97 0 144H28c-16-47-16-97 0-144zm212 293c-17-15-33-33-46-53h92c-13 20-28 38-46 53zm65-53h83c-35 31-80 50-126 55 16-17 31-35 43-55zm-87 55c-46-5-91-24-126-55h83c12 20 27 38 43 55zm-34-71c-11-20-21-42-27-64h166c-6 22-15 44-27 64zM34 328h106c6 22 15 44 26 64H76c-18-19-32-40-42-64zm370 64h-90c11-20 20-42 26-64h106c-10 24-24 45-42 64zm0 0"/><path d="M64 282c1 4 4 6 8 6s7-2 8-6l16-54 16 54c1 4 5 6 8 6 4 0 7-2 8-6l24-88-16-4-16 61-16-53a8 8 0 0 0-16 0l-16 53-16-61-16 4zm0 0M216 288c4 0 7-2 8-6l16-54 16 54c1 4 5 6 8 6 4 0 7-2 8-6l24-88-16-4-16 61-16-53a8 8 0 0 0-16 0l-16 53-16-61-16 4 24 88c1 4 4 6 8 6zm0 0M360 288c4 0 7-2 8-6l16-54 16 54c1 4 5 6 8 6 4 0 7-2 8-6l24-88-16-4-16 61-16-53a8 8 0 0 0-16 0l-16 53-16-61-16 4 24 88c1 4 4 6 8 6zm0 0"/></svg></a>

		</li>
	</ul>
</template>

<script>
export default {
	data() {
		return {
			items: [
				{
					title: 'Этот сайт',
					repo: 'https://github.com/lipatoff/portfolio',
					type: 'Nuxt'
				},
				{
					title: 'Блог на Nuxt.js',
					link: 'https://lipatoff.github.io/blog-nuxt/',
					repo: 'https://github.com/lipatoff/blog-nuxt',
					type: 'Nuxt'
				},
				{
					title: 'Заметки на Vue.js',
					link: 'https://lipatoff.github.io/vue-notes/#/',
					repo: 'https://github.com/lipatoff/vue-notes',
					type: 'Vue'
				},
				{
					title: 'Поиск по GitHub',
					link: 'https://lipatoff.github.io/github-finder/#/',
					repo: 'https://github.com/lipatoff/github-finder',
					type: 'Vue'
				},
			],
			logos: {
				'Vue' : '<svg class="vueworks__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 221"><path d="M205 0h51L128 221 0 0h98l30 51 29-51h48z" fill="#41B883"/><path d="M0 0l128 221L256 0h-51l-77 132L51 0H0z" fill="#41B883"/><path d="M51 0l77 133L205 0h-48l-29 51L98 0H51z" fill="#35495E"/></svg>',
				'Nuxt' : '<svg class="vueworks__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 303"><path d="M123 292l-1-1c-2-4-2-8-2-12H25L167 27l59 107 19-14-59-107c-1-2-8-13-20-13-5 0-13 2-19 13L4 268c-1 2-7 14-1 24 2 5 8 10 21 10h120c-13 0-19-5-21-10z" fill="#00C58E"/><path d="M395 269L280 62c-2-2-8-13-20-13-5 0-12 2-19 13l-15 24v48l34-59 114 204h-43a20 20 0 0 1-2 12v1c-6 10-19 10-21 10h68c2 0 15 0 21-10 2-5 4-13-2-23z" fill="#108775"/><path d="M332 292v-1l1-2c1-3 2-7 1-10l-4-11-90-158-13-24h-1l-13 24-91 158-3 11a21 21 0 0 0 2 13c3 5 9 10 21 10h168c3 0 16 0 22-10zM226 134l83 145H144l82-145z" fill="#2F495E"/></svg>'
			}
		}
	}
}
</script>

<style lang="sass">
.vueworks
	list-style: none
	&__item
		margin-bottom: 1em
	&__link
		vertical-align: middle
		padding-left: 10px
		font-size: 0
		+hover
			&:hover
				opacity: 0.7
	&__svg
		width: 25px
		height: 25px
		fill: $color-a
	&__icon
		width: 32px
		max-height: 28px
	&__logo
		display: inline-block
		vertical-align: middle
		margin-right: 10px

</style>