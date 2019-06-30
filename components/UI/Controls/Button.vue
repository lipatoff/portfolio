<template>
	<button
		class="button"
		:class="bclass"
		v-on="$listeners"
		v-bind="$attrs">
		<slot/>
	</button>
</template>

<script>
export default {
	props: {
		bclass: {
			type: String,
			default: ''
		}
	}
}
</script>

<style lang="sass">

</style>