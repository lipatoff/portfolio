<template>
	<div class="container">
		<p><b>E-mail: </b><a href="mailto:dmitriy.lipatov@gmail.com">dmitriy.lipatov@gmail.com</a></p>
		<p><b>WhatsApp / Telegram: </b>+7 (967) 115-08-98</p>
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