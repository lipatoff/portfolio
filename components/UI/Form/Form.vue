<template>
	<form class="form" @submit.prevent="onSubmit">
		<div class="form__main">
			<p v-if="title" class="form__title">{{ title }}</p>

			<slot/>

			<div class="form__block-submit">
				<div class="form__assent">
					<label>
						<input class="form__input form__input_notempty" name="oassent" type="checkbox" required="" checked="checked">
						<i></i>Даю согласие на обработку<br>своих персональных данных
					</label>
				</div>
				<!-- <input type="submit" class="form__button button" :value="button"/> -->
				<AppButton class="form__button"> {{button}} </AppButton>
			</div>

			<input type="hidden" name="otype" :value="guid">
		</div>

       	<div class="form__message">
        	<p class="form__title">Спасибо!</p>
        	<p class="form__text">Скоро мы свяжемся с Вами!</p>
        </div>
	</form>
</template>

<script>
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
export default {
	props: {
		title: {	//Заголовок формы
			type: String,
			default: null
		},
		button: {	//Надпись на кнопке
			type: String,
			default: 'Отправить'
		},
		guid: {		//Идентификатор формы
			type: Number,
			default: 1
		}
	}
}
</script>

<style lang="sass">
.form
	position: relative
	margin: 0 auto 10px
	font-size: 15px

	&__block-submit
		padding-top: 10px
		text-align: center
			
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

	+media($s)
		max-width: 415px
		&__block-submit
			+flex-min
			max-width: none
			flex-direction: row
			align-items: center
		&__assent
			margin-right: 10px		
	+media($m)
		&__text
			display: block
</style>