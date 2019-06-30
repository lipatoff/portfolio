<template>
	<ul class="menu" :class="bclass">
		<li v-for="(link, index) in links" :key="index" class="menu__item">
			<nuxt-link class="menu__link" :to="link.url" @click.native="onClick">{{ link.title }}</nuxt-link>
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		bclass: {
			type: String,
			default: ''
		},
	},
	data() {
		return {
			links: [
				{title: 'Портфолио', url: '/portfolio/'},
				{title: 'Контакты', url: '/contacts/'}
			]
		}
	},
	methods: {
		onClick() {
			return this.$emit('click', false)
		}
	}
}
</script>

<style lang="sass">
//Меню
.menu
	+touch
	margin: 0
	padding: 0

	&__item
		display: block
		margin: 0

	&__button
		position: absolute
		right: 5px
		font-size: 20px
		padding: 7px
		&:before
			content: '\e800'
			font-family: fontello

	@at-root input:checked+&__button
		transform: rotate(180deg)

	&__link
		display: inline-block
		line-height: $nav-height - 20
		padding: 10px $padding
		transition: box-shadow $animate
		&.active
			box-shadow: 0 -2px inset
		&:hover
			opacity: 0.6

	&__submenu
		display: none
		margin: 0
		padding: 0
		background-color: lighten($color-nav, 5%)

	+media-min($nav)
		input:checked~&__submenu
			display: block

	+media($nav)
		&__submenu .menu__item
			position: relative
		&__item
			&:hover>.menu__submenu
				display: block
		&__button
			display: none            
		&__submenu
			position: absolute
			z-index: 10
			& &
				top: 0
				left: 100%

//Верхнее меню
.menu_nav
	+fixed
	display: none
	overflow-y: auto
	z-index: 9998
	background-color: $color-nav
	text-align: center

	+media-min($nav)
		&.menu_active
			display: block

	+media($nav)
		text-align: left
		+flex-min
		position: static
		margin: 0 -#{$padding}
		padding: 0
		transform: none
		transition: none
		overflow: visible


	//Мобильное меню. Варианты появления
	@if $nav_animate==left or $nav_animate==right	
		display: unset
		will-change: transform
		min-width: 250px
		max-width: 320px
		transition: transform $animate_speed
		@if $nav_animate==left
			left: 0
			transform: translate(-100%, $ios-y)
		@else
			right: 0
			transform: translate(100%, $ios-y)
		&.menu_active
			transform: translate(0, $ios-y)

		+media-min($nav)
			&.menu_active
				display: unset

		+media($nav)
			max-width: none
			&.menu_active
				transform: none
	@else
		left: 0
		right: 0

	padding-top: 110px

</style>