<template>
	<footer class="footer">
		<div class="footer__block">
			<svg class="footer__border" xmlns="http://www.w3.org/2000/svg" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0 0 C 50 100 80 100 100 0 Z"></path></svg>
			<div class="container footer__container">
				<p>© 2019, Dmitrii Lipatov</p>
				<SocLinks :bclass="'soc_footer'"/>
			</div>
		</div>
	</footer>
</template>

<style lang="sass">
.footer
	margin-top: auto
	padding-top: 10vh
	color: #fff
	font-size: 0.9em
	text-align: center
	&__border
		display: block
		fill: #fff
		margin-top: -0.05em
	&__container
		padding: 20px $padding 50px
	&__block
		background-color: $color-a
		overflow: hidden
	+media($s)
		&__container
			+flex_min
			align-items: center

footer p
	margin: 0
</style>