<AppForm title="Обратный звонок">
	<AppFormInput>Имя</AppFormInput>
	<AppFormInput name="ofam">Фамилия</AppFormInput>
	<AppFormInput type="tel">Телефон</AppFormInput>
	<AppFormInput type="email" :required="false">E-mail</AppFormInput>
	<AppFormInput type="textarea">Комментарий</AppFormInput>
	<AppFormInput type="password">Пароль</AppFormInput>
	<AppFormInput type="password">Подтверждение</AppFormInput>
</AppForm>