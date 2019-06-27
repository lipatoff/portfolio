<template>
	<div class="form__item">
		<label class="form__label"> <slot/> </label>
		<input
			v-bind="$attrs"
			:value="value"
			:type="type"
			:required="required"
			@input="$emit('input', $event.target.value)"
			class="form__input"
			>
	</div>
</template>

<script>
export default {
	props: {
		value: {
			type: String,
			default: ''
		},
		type: {
			type: String,
			default: 'text'
		},
		required: {
			type: Boolean,
			default: true
		}
	}
}
</script>