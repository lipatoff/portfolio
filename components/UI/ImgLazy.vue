<template>
	<no-ssr>
		<img
			class="img img_hide"
			@load="$event.target.classList.remove('img_hide')"
			v-bind="$attrs"
			:src="$router.options.base + src"
		/>
	</no-ssr>
</template>

<script>
export default {
	props: {
		src: {
			type: String,
			default: ''
		}
	}
}
</script>


<style lang="sass">
.img
	animation: show $animate
	&_hide
		display: none
</style>
