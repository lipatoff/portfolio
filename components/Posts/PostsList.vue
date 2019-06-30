<template>
	<section class="posts">
		<postPrev
			v-for="post in posts"
			:key="post.id" :post="post"/>
	</section>
</template>

<script>
import postPrev from '@/components/Posts/PostPrev.vue'

export default {
	components: {
		postPrev
	},
	props: {
		posts: {
			type: Array,
			required: true
		},
		admin: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style lang="sass">
.posts
	display: flex
	flex-wrap: wrap
	margin: 0 -10px
</style>
