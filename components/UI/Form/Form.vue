<template>
	<form class="form">
		<div class="form__main">
			<p v-if="title" class="form__title">{{ title }}</p>

			<slot/>

			<div class="form__item-submit">
				<div class="form__assent">
					<label>
						<input class="form__input form__input_notempty" name="oassent" type="checkbox" required="" checked="checked">
						<i></i>Даю согласие на обработку<br>своих персональных данных
					</label>
				</div>
				<input type="submit" class="form__button button" :value="button"/>
			</div>

			<input type="hidden" name="otype" value="1">
		</div>

       	<div class="form__message">
        	<p class="form__title">Спасибо!</p>
        	<p class="form__text">Скоро мы свяжемся с Вами!</p>
        </div>
	</form>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: null
		},
		button: {
			type: String,
			default: 'Отправить'
		}
	}
}
</script>

<style lang="sass">
//Форма
.form
	position: relative
	margin: 0 auto 10px
	font-size: 15px

	&__item
		display: flex
		position: relative
		text-align: left
		margin: 15px auto 0
		max-width: 260px
		&-submit
			padding-top: 10px
			text-align: center
	
	&__label
		margin: 0

	&__star
		margin-left: 3px
		color: $color-red

	&__input
		flex-grow: 1
		color: #000
		padding: 0.7em 1em
		border: 1px solid
		font: 400 0.74rem Arial
		&:focus
			background-color: $color-light
		&:hover
			+hover
				background-color: $color-light
		&_name
			text-transform: capitalize
		&_error
			color: $color-red
			&[type=checkbox]+i
				box-shadow: 0 0 0 1px $color-red
		&[type=checkbox]
			display: block
			position: fixed
			z-index: -99
			opacity: 0

	&__error
		position: absolute
		z-index: 1
		right: 0
		bottom: -14px
		line-height: 1
		padding: 0 8px 1px
		font-size: 14px
		color: #fff
		background-color: $color-red
			
	&_success, &_no-success
		.form__main
			opacity: 0

	&__message
		position: absolute
		left: 0
		right: 0
		top: 0
		bottom: 0
		display: none
		flex-direction: column
		justify-content: center
		text-align: center

	&_success &__message_success, &_no-success &__message_error
		display: flex

	&__title
		margin: 0.5rem 0 1.4rem
		text-align: center
		font-size: 2rem
		@if $font-h!=$font-regular
			font-weight: $font-h
		&_error
			color: $color-red

	&__text
		display: none

	+media(s)
		max-width: 415px
		&__item, &__item-submit
			max-width: none

	+media(m)
		&__text
			display: block



//Кастомизация
.form
	@if $form_theme == 1
		&__item
			flex-direction: column

		+media(s)
			&__item, &__item-submit
				flex-direction: row
				align-items: center
			&__item-submit
				+flex-min
			&__assent
				margin-right: 10px
			&__label
				width: 115px
				margin-right: 5px

	@else if $form_theme == 2
		&__label
			position: absolute
			left: 0
			top: 0
			color: $color-grey
			pointer-events: none
			padding: 0.7em 1em
			line-height: 1
			transition: top 0.3s, font-size 0.3s
		&__input:focus ~ &__label, &__input_notempty ~ &__label
			top: -20px
			font-size: 0.6em
			color: currentColor
		&__star
			color: unset




//Контейнер формы
.form-container
	&:after
		content: $img
		display: block
		margin: auto
	&_load:after
		display: none

//Селекторы
select
	border: 1px solid #ccc

textarea
	resize: none
	overflow: hidden
	min-height: 80px
	max-height: 30vh

input, label, button, select, textarea
	border-radius: 0
	outline: 0

[type=password],[type=text],[type=date],[type=datetime],[type=email],[type=number],[type=tel],[type=submit],textarea,label,button
	-webkit-appearance: none

[type=number]
	width: auto
	-moz-appearance: textfield
	&::-webkit-inner-spin-button, &::-webkit-outer-spin-button
		-webkit-appearance: none
		-moz-appearance: none
		appearance: none
		margin: 0

//checkbox и radio
[type=checkbox], [type=radio]
	display: none

input+i
	display: inline-block
	vertical-align: middle
	width: 15px
	height: 15px
	margin: 0 10px 1px 1px
	box-shadow: 0 0 0 1px currentColor
	background-color: #fff
	color: $color-base
	font-style: normal
	text-align: center
	line-height: 14px

input:focus+i
	background-color: $color-light

[type=checkbox]
	&:checked+i:before
		content: '\2714'

[type=radio]
	&+i
		border-radius: 50%
	&:checked+i
		background-color: $color-base
</style>