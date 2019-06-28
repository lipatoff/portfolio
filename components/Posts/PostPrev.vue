<template>
	<div class="post">
		<div class="post__img-wrap">
			<img :src="$router.options.base+post.img" :alt="post.title" class="post__img">
		</div>
		<div class="post__info">
			<h3 class="post__title">{{ post.title }}</h3>
			<p>{{ post.descr }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		post: {
			type: Object,
			required: true
		}
	}
}
</script>

<style lang="sass">
.post
	max-width: 385px
	width: 33%
	margin-bottom: 30px
	&__info
		padding: 0 1rem
		font-size: 18px
	&__img-wrap
		position: relative
		padding-bottom: 60%
	&__img
		position: absolute
	&__title
		margin: 10px 0
</style>
