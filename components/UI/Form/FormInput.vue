<template>
	<div class="form-item">
		<label class="form-item__label"> <slot/> </label>

		<textarea
			v-if="type=='textarea'"
			v-bind="$attrs"
			:value="value"
			:required="required"
			@input="$emit('input', $event.target.value)"
			class="form-item__input">
		</textarea>

		<input
			v-else
			v-bind="$attrs"
			:value="value"
			:type="type"
			:required="required"
			@input="$emit('input', $event.target.value)"
			class="form-item__input">
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

<style lang="sass">
.form-item
	display: flex
	flex-direction: column
	position: relative
	text-align: left
	margin: 15px auto 0
	max-width: 260px
	
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

	+media($s)
		max-width: none
		flex-direction: row
		align-items: center
		&__label
			width: 115px
			margin-right: 5px
</style>