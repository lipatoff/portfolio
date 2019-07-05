<template>
	<div class="soc" :class="bclass">
		<a  v-for="(item, index) in items"
			:key="index"
			:href="item.link"
			:style="`color:${item.color};flex-grow:${item.size}`"
			target="_blank"
			class="soc__item">
			<svg :viewBox="item.viewBox" xmlns="http://www.w3.org/2000/svg" class="soc__icon">
				<path :d="item.path"/>
			</svg>
		</a>
	</div>
</template>

<script>
export default {
	props: {
		bclass: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			items: [
				{
					link: 'https://www.linkedin.com/in/dmitrii-lipatov/',
					color: '#0077b5',
					size: '0.8',
					viewBox: '0 0 439 439',
					path: 'M5 146h94v283H5zM409 172c-20-22-46-33-79-33-12 0-23 2-32 5-10 3-18 7-25 12a122 122 0 0 0-27 30v-40h-94v283h94V271c0-10 1-17 3-23 4-10 10-18 18-25 8-6 18-9 30-9 16 0 28 5 36 17 8 11 12 27 12 47v151h94V267c0-42-10-74-30-95zM53 10c-16 0-28 4-38 14C5 33 0 44 0 59c0 13 5 25 14 34 10 10 22 14 38 14h1c16 0 28-4 38-14 10-9 15-21 15-34-1-15-5-26-15-35-9-10-22-14-38-14z'
				},
				{
					link: 'https://github.com/lipatoff',
					color: '#7e7e7e',
					size: '1',
					viewBox: '0 0 16 16',
					path: 'M8 0a8 8 0 0 0-2.5 15.6c.4 0 .5-.2.5-.4v-1.5c-2 .4-2.5-.5-2.7-1 0-.1-.5-.9-.8-1-.3-.2-.7-.6 0-.6.6 0 1 .6 1.2.8.7 1.2 1.9 1 2.4.7 0-.5.2-.9.5-1-1.8-.3-3.7-1-3.7-4 0-.9.3-1.6.8-2.2 0-.2-.3-1 .1-2 0 0 .7-.3 2.2.7a7.4 7.4 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.5 1.1.2 2 .1 2.1.5.6.8 1.3.8 2.2 0 3-1.9 3.7-3.6 4 .3.2.5.7.5 1.4v2.2c0 .2.1.5.5.4A8 8 0 0 0 16 8a8 8 0 0 0-8-8z'
				},
				{
					link: 'https://vk.com/lipton_icetea',
					color: '#4a76a8',
					size: '1',
					viewBox: '0 0 34 19',
					path: 'M31.6 1.3c.2-.8 0-1.3-1.1-1.3H27c-.9 0-1.3.5-1.5 1 0 0-1.8 4.3-4.3 7.1-.8.9-1.2 1.1-1.7 1.1-.2 0-.5-.2-.5-1v-7c0-.8-.3-1.2-1-1.2h-5.5c-.6 0-.9.4-.9.8 0 .8 1.3 1 1.4 3.4v5.2c0 1.1-.2 1.3-.6 1.3-1.2 0-4.1-4.4-5.8-9.3C6.2.4 5.9 0 5 0H1.5C.5 0 .3.5.3 1c0 1 1.2 5.5 5.5 11.6 3 4.1 7 6.4 10.7 6.4 2.2 0 2.5-.5 2.5-1.4v-3.1c0-1 .2-1.2 1-1.2.4 0 1.3.3 3.4 2.3 2.4 2.3 2.8 3.4 4.1 3.4H31c1 0 1.5-.5 1.2-1.5a15 15 0 0 0-3-4c-.8-1-2-2-2.4-2.6-.5-.7-.3-1 0-1.6 0 0 4.3-6 4.8-8z'
				},
				{
					link: 'https://habr.com/ru/users/lipton_ice_tea/',
					color: '#77a2b6',
					size: '1.7',
					viewBox: '0 0 92 32',
					path: 'M6.8 12.3a7 7 0 0 1 5.6-2.9h.5c4.3 0 7.6 3 7.6 8v14h-6.8V19.8c0-2.5-1.3-4-3.4-4-1.9 0-3.5 1.4-3.5 4.1v11.5H0V0h6.8zm39.8 19.1h-6.5v-2.3a7.3 7.3 0 0 1-5.9 3L34 32c-5.7 0-10-5-10-11.3S28.3 9.4 34 9.4h.3c2.4 0 4.5 1.2 5.8 3V10h6.6zM31 20.7a4.6 4.6 0 1 0 9.2 0 4.6 4.6 0 0 0-9.2 0zm43 0C74 27 69.8 32 64 32h-.3a7.3 7.3 0 0 1-5.8-2.8v2.2h-6.6V0h6.8v12a7.3 7.3 0 0 1 5.6-2.5h.4c5.6 0 9.9 4.9 9.9 11.2zm-16.1 0a4.6 4.6 0 1 0 9.2 0 4.6 4.6 0 0 0-9.2 0zm34.5-11l-.6 6.9c-1-.4-2.2-.6-3.4-.6h-.5a3.5 3.5 0 0 0-3.4 3.9v11.5h-6.9V10h6.6v2.5c1.1-1.8 3.1-3 5.4-3h.5c.8 0 1.6 0 2.4.3z'
				},
			]
		}
	}
}
</script>

<style lang="sass">
.soc
	display: flex
	align-items: center
	max-width: 280px
	margin: 20px auto 0
	&__item
		padding: 2%
		&+&
			margin-left: 5%
	&__icon
		fill: $color-text
		transition: fill $animate-speed

	&_footer
		width: 170px
	&_footer &__icon
		fill: $color-two

	+hover
		&__item:hover &__icon
			fill: currentColor

	+media($s)
		margin: 0
		&_home
			margin: 0 -2%

</style>
