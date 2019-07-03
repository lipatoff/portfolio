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
			titleLoad: false,
			h1Now: '',
			h1New: ''
		}
	},
	created() {
		this.elemHtml = this.$store.getters['getH1']
		this.h1Now = this.elemHtml.split('')
	},
	computed: {
		updateH1() {
			let newh1 = this.$store.getters['getH1']
			this.h1New = newh1.split('')
			return newh1
		}
	},
	watch: {
		h1New() {
			if (this.titleLoad) this.h1Animate( Math.max(this.h1New.length, this.h1Now.length) )
			else this.titleLoad = true
		}
	},
	methods: {
		h1Animate(count, i = 0, h1NewNow = this.h1New) {
			if (h1NewNow != this.h1New) return false

			if (i >= count) {
				this.elemHtml = this.h1New.join('')
				this.h1Now = this.elemHtml.split('')
				return false
			}

			this.h1Now[i] = this.h1New[i] ? this.h1New[i] : ''

			let h1Html = [...this.h1Now]
			h1Html[i] = `<span>${h1Html[i]}</span>`

			this.elemHtml = h1Html.join('')

			return setTimeout(this.h1Animate, 50, count, ++i, h1NewNow)

		}
	}
}
</script>

<style lang="sass">
.header
	&__container
		padding: 70px 1rem 15px

	&__figure
		text-align: center
		font-size: 0


	+media($xs)
		&__container
			padding: 70px $padding 15px

	+media($header)
		&__container
			+flex-min
			align-items: center

		+media($nav)
		padding-top: 0

h1 span
	color: #ccc
	border-right: 4px solid $color-grey
</style>