<template>
	<footer class="footer">
		<div class="footer__block">
			<svg class="footer__border" xmlns="http://www.w3.org/2000/svg" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0 0 C 50 100 80 100 100 0 Z"></path></svg>
			<div class="container footer__container">
				<p>© 2019, Dmitrii Lipatov</p>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	
}
</script>

<style lang="sass">
.footer 
	margin-top: auto
	padding-top: 10vh
	color: #fff
	font-size: 0.9em
	&__border
		display: block
		fill: #fff
	&__container
		padding: 20px $padding 50px
	&__block
		background-color: #d0d0d0
		overflow: hidden
footer p
	margin: 0
</style>