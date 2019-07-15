<template>
	<div class="container cont">
		<p class="cont__item"><b>E-mail: </b><a class="cont__link" href="mailto:dmitriy.lipatov@gmail.com">dmitriy.lipatov@gmail.com</a></p>
		<p class="cont__item"><b>WhatsApp / Telegram: </b><span class="cont__link">+7 (967) 115-08-98</span></p>
		<SocLinks/>
	</div>
</template>

<script>
export default {
	head() {
		let title = 'Мои Контакты',
			descr = 'Как со мной связаться'

		return {
			title: title,
			meta: [
				{ hid: 'og:title', name: 'og:title', content: title },
				{ hid: 'description', name: 'description', content: descr },
				{ hid: 'og:description', name: 'og:description', content: descr },
			]
		}
	},
	fetch({store}) {
		store.dispatch('setH1', 'Контакты')
	}
}
</script>

<style lang="sass">
.cont
	&__item
		max-width: 270px
		margin: 0 auto 1.4em
	&__link
		display: block
	+media($s)
		&__item
			max-width: none
		&__link
			display: inline
</style>
