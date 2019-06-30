<template>
	<header class="header">
		<div class="container header__container">
			<div class="header__main">
				<h1 :key="getH1e" v-html="elemHtml"></h1>
			</div>
		</div>	
	</header>
</template>

<script>
export default {
	data() {
		return {
			elemHtml: ''
		}
	},
	computed: {
		getH1e() {
			let newh1 = this.$store.getters['getH1'].split('')
			
			setTimeout(this.h1Animate, 50, 0, newh1)

			return newh1.join('')
		}
	},
	methods: {
		h1Animate(i, newh1, count = -1, h1 = this.elemHtml.split('')) {

			if (count < 0) count = Math.max(newh1.length, h1.length)

			if (i >= count) {
				this.elemHtml = newh1.join('')
				return false
			}

			let ne = newh1[i] ? newh1[i] : ''
			h1[i] = ne
			
			let h1Html = [...h1]
			h1Html[i] = `<span>${h1Html[i]}</span>`

			this.elemHtml = h1Html.join('')
			i = i+1

			return setTimeout(this.h1Animate, 50, i, newh1, count, h1)
			
		}
	}
}
</script>

<style lang="sass">
.header
	&__container
		padding-top: 15px
		padding-bottom: 15px

	&__figure
		text-align: center
		font-size: 0

	+media($header)
		&__container
			+flex-min
			align-items: center

h1 span
	color: #ccc
	border-right: 4px solid #000
</style>