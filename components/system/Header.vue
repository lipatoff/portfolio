<template>
	<header class="header">
		<div class="container header__container">
			<div class="header__main">
				<h1 :key="updateH1" v-html="elemHtml"></h1>
			</div>
		</div>	
	</header>
</template>

<script>
export default {
	data() {
		return {
			elemHtml: '',
			titleLoad: false
		}
	},
	created() {
		this.elemHtml = this.$store.getters['getH1']
	},
	computed: {
		updateH1() {
			let newh1 = this.$store.getters['getH1']
			
			if (this.titleLoad) setTimeout(this.h1Animate, 60, 0, newh1.split(''))
			else this.titleLoad = true
			
			return newh1
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

			return setTimeout(this.h1Animate, 60, i, newh1, count, h1)
			
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

	padding-top: 70px
	+media($nav)
		padding-top: 0

h1 span
	color: #ccc
	border-right: 4px solid $color-grey
</style>