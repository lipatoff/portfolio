<template>
	<div class="container">
		<AppForm title="Обратный звонок">
			<AppFormInput>Имя</AppFormInput>
			
			<div class="form__item">
				<p class="form__label">Имя</p>
				<input class="form__input form__input_name" name="oname" type="text" required="" minlength="2" maxlength="30"/>
			</div>
			<div class="form__item">
				<p class="form__label">Телефон</p>
				<input class="form__input" name="otel" type="tel" required=""/>
			</div>
			<div class="form__item">
				<p class="form__label">E-mail</p>
				<input class="form__input" name="omail" type="email" maxlength="30" />
			</div>
			<div class="form__item">
				<p class="form__label">Комментарий</p>
				<textarea class="form__input" name="omess" required="" minlength="2" maxlength="100"></textarea>
			</div>

			<div class="form__item">
				<p class="form__label">Пароль</p>
				<input class="form__input" name="opassword" type="password" required="" minlength="5" maxlength="30"/>
			</div>
			<div class="form__item">
				<p class="form__label">Подтверждение</p>
				<input class="form__input" name="opassword2" type="password" required="" minlength="5" maxlength="30"/>
			</div>


		</AppForm>
	</div>
</template>

<script>
import AppForm from "@/components/UI/Form/Form.vue"
import AppFormInput from "@/components/UI/Form/FormInput.vue"

export default {
	components: {
		AppForm,
		AppFormInput
	}
}
</script>
