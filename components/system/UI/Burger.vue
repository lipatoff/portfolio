<template>
	<div class="burger" :class="{ burger_active: active }" @click="onClick">
		<span class="burger__line"></span>
		<span class="burger__line"></span>
		<span class="burger__line"></span>
	</div>
</template>

<script>
export default {
	data() {
		return {
			active: false
		}
	},
	methods: {
		onClick() {
			this.active = !this.active
			return this.$emit('click',this.active)
		}
	}
}
</script>

<style lang="sass">
$burger_animate: 1 		//Анимация кнопки меню (от 1 до 8), 0=без анимации /=1

//Кнопка-гамбургер
.burger
	position: relative
	z-index: 9999
	top: 5px
	display: inline-block
	padding: 5px 10px 11px
	background-color: $color-nav
	@if $nav_animate!=right
		left: -10px
	&__line
		display: block
		width: 21px
		height: 2px
		margin: 6px auto 0
		color: currentColor
		background-color: currentColor

	+media($nav)
		display: none

//Добавляет фон для закрытия меню
.burger
	@if $nav_animate==left or $nav_animate==right
		z-index: initial
		&__line
			position: relative
			z-index: 10000
		&:before
			+fixed
			content: ''
			left: 0
			z-index: 1
			transition: background-color $animate_speed
		&_active:before
				background-color: rgba(0,0,0,0.4)
				right: 0			
		&:after
			content: ''			
			position: absolute
			z-index: 9999
			top: 0
			left: 0
			right: 0
			bottom: 0
			background-color: inherit

//Анимация кнопки-гамбурера
.burger__line
	@if $burger_animate>0
		@if $burger_animate<3     //Вариант 1 и 2
			transition: transform 0.3s, opacity 0.3s

			.burger_active &
				&:nth-child(1)
					transform: translate(0, 8px) rotate(45deg)

				@if $burger_animate==1
					&:nth-child(2)
						transform: rotate(-45deg)
					&:nth-child(3)
						transform: translate(0, 12px)
						opacity: 0

				@else if $burger_animate==2
					&:nth-child(2)
						transform: translate(-12px, 0)
						opacity: 0
					&:nth-child(3)
						transform: translate(0, -8px) rotate(-45deg)

		@else if $burger_animate<5     //Вариант 3 и 4
			background-color: none

			&:before
				content: ''
				display: block
				width: 21px
				height: 2px
				background-color: currentColor
			
			&, .burger_active &:before
				transition: transform 0.25s 0.25s, opacity 0s 0.25s
			&:before, .burger_active &
				transition: transform 0.25s, opacity 0s 0.25s

			.burger_active &
				@if $burger_animate==3
					&:nth-child(1)
						transform: translate(0, 8px)
						&:before
							transform: rotate(45deg)
					&:nth-child(2)
						opacity: 0
					&:nth-child(3)
						transform: translate(0, -8px)
						&:before
							transform: rotate(-45deg)

				@else if $burger_animate==4
					&:nth-child(1)
						opacity: 0
					&:nth-child(2)
						transform: translate(0, -8px)
						&:before
							transform: translate(0, 8px) rotate(45deg)
					&:nth-child(3)
						transform: translate(0, -16px)
						&:before
							transform: translate(0, 8px) rotate(-45deg)

		@else if $burger_animate<7     //Вариант 5 и 6
			height: 0
			box-shadow: 0px 0px 0px 1px
			@if $burger_animate==6
				transition: box-shadow 0.5s

			:before
				content: ''
				display: block
				width: 21px
				box-shadow: 0px 0px 50px 20px transparent
				transition: box-shadow 0.5s

			&:nth-child(1)
				&:before
					transform: translate(0px, 8px) rotate(45deg)
			&:nth-child(2)
				margin-top: 14px
			&:nth-child(3)
				margin-top: 22px
				&:before
					transform: translate(0px, -8px) rotate(-45deg)

			.burger_active &
				box-shadow: 0px 0px 50px 20px transparent
				transition: box-shadow 0.5s

				&:not(:nth-child(2)):before
					box-shadow: 0px 0px 0px 1px
					@if $burger_animate==5
						transition: none

		@else if $burger_animate==7     //Вариант 7
			transition: transform 0.3s

			.burger_active &
				&:nth-child(1)
					transform: translate(0px, 8px) rotate(-45deg)
				&:nth-child(2)
					transform: rotate(-135deg)
				&:nth-child(3)
					transform: translate(0px, -8px) rotate(-45deg)

		@else if $burger_animate==8     //Вариант 8
			transition: width 0.1s 0.3s, transform 0.3s
			&:nth-child(1)
				transform-origin: 50% 9px
			&:nth-child(3)
				transform-origin: 50% -7px

			.burger_active &
				transition: width 0.1s, transform 0.3s 0.1s
				&:nth-child(1)
					width: 2px
					transform: rotate(-45deg) scaley(5) translatey(7px)
				&:nth-child(2)
					transform: rotate(-45deg) scaleX(0.94)
				&:nth-child(3)
					width: 2px
					transform: rotate(-45deg) scaley(5) translatey(-7px)
	
	@else 	//Без анимации
		.burger_active &
			&:nth-child(1)
				transform: translate(0, 8px) rotate(45deg)
			&:nth-child(2)
				transform: rotate(-45deg)
			&:nth-child(3)
				opacity: 0
</style>