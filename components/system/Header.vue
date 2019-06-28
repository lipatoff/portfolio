<template>
	<header class="header">
		<div class="container header__container">
			<div class="header__main">
				<h1>{{ h1 }}</h1>
			</div>
		</div>	
	</header>
</template>

<script>
export default {
	computed: {
		h1() {
			return this.$store.getters['getH1']
		}
	}
}
</script>

<style lang="sass">
.header
	&__container
		padding-top: 15px
		padding-bottom: 15px

	&__figure
		text-align: center
		font-size: 0

	+media($header)
		&__container
			+flex-min
			align-items: center
</style>