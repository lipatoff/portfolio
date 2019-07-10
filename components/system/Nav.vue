<template>
	<nav class="nav">
		<div class="container nav__container fbetween">
			<nuxt-link class="logo" to="/"><img :src="$router.options.base+'/img/logo.svg'" alt="Логотип"/></nuxt-link>
			<Burger :active="active" @click="toggleActive" />
			<Menu :bclass="menuClass" @click="toggleActive" />
		</div>
	</nav>
</template>

<script>
import Burger from '@/components/system/UI/Burger.vue'
import Menu from '@/components/system/UI/Menu.vue'

export default {
	components: {
		Burger,
		Menu
	},
	data() {
		return {
			active: false
		}
	},
	computed: {
		menuClass() {
			if (this.active) return 'menu_nav menu_active'
			return 'menu_nav'
		}
	},
	methods: {
		toggleActive(status) {
			return this.active = status
		}
	}

}
</script>

<style lang="sass">
//Верхнее меню
.nav
	position: fixed
	top: 0
	z-index: 998
	height: $nav-height
	color: $color-nav_text
	font-size: $font-size
	box-shadow: 0 0 0 1px $color-base

	@if $nav_animate==right
		right: 0
	@else
		left: 0

	+media($nav)
		position: static
		background-color: $color-nav
		@if $nav_animate==right
			left: 0
		@else
			right: 0

		&_scroll
			position: relative
			position: -webkit-sticky
			position: sticky
			&_fixed
				position: fixed
				&+*
					margin-top: $nav-height

		&_show
			transition: transform 0.3s
			&_hide
				transform: translateY(-100%)
				+hover
					&:hover
						transform: none

	left: 0
	background-color: $color-nav

.logo
	width: 195px
	font-size: 0
	padding: 27px 0
</style>