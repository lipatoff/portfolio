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
		this.elemHtml = this.$store.state.h1
		this.h1Now = this.elemHtml.split('')
	},
	computed: {
		updateH1() {
			let newh1 = this.$store.state.h1
			this.h1New = newh1.split('')
			return newh1
		}
	},
	watch: {
		h1New() {
			if (this.titleLoad) setTimeout(this.h1Animate, 500, Math.max(this.h1New.length, this.h1Now.length))
			else this.titleLoad = true
		}
	},
	methods: {
		h1Animate(count) {
			let i = 0,
				h1NewNow = this.h1New

			const funAnimate = () => {
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

				i++
				return setTimeout(() => requestAnimationFrame(funAnimate), 50)
			}
			requestAnimationFrame(funAnimate)
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


	+media($s)
		&__container
			padding: 70px $padding 15px

	+media($header)
		&__container
			+flex-min
			align-items: center

	+media($nav)
		&__container
			padding-top: 0

h1 span
	color: #ccc
	border-right: 4px solid $color-grey
</style>