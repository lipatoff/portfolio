<template>
	<header class="header">
		<div class="container header__container">
			<nuxt-link class="logo" to="/">Blog</nuxt-link>

			<div class="header__main">
		
			</div>
		</div>	
	</header>
</template>

<script>
export default {
	
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

header p
	margin: 0
</style>