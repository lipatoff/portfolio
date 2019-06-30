<template>
	<div class="post">
		<div class="post__img-wrap">
			<img :src="$router.options.base+post.img" :alt="post.title" class="post__img">
		</div>
		<div class="post__info">
			<div class="post__head" :style="`color:${post.color}`">
				<h3 class="post__title">{{ post.title }}</h3>
				<a v-if="post.link" :href="post.link" class="post__web" target="_blank"><svg class="post__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480"><path d="M240 0a240 240 0 0 0 0 480 240 240 0 1 0 0-480zm206 152H340c-6-22-15-44-26-64h90c18 19 32 40 42 64zM240 19c18 15 33 33 46 53h-92c13-20 29-38 46-53zm-65 53H92c35-31 80-50 126-55-16 17-31 35-43 55zm87-55c47 5 91 24 126 55h-83c-12-20-27-38-43-55zm34 71c12 20 21 42 27 64H157c6-22 16-44 27-64zM76 88h90c-11 20-20 42-26 64H34c10-24 24-45 42-64zm-48 80h424c16 47 16 97 0 144H28c-16-47-16-97 0-144zm212 293c-17-15-33-33-46-53h92c-13 20-28 38-46 53zm65-53h83c-35 31-80 50-126 55 16-17 31-35 43-55zm-87 55c-46-5-91-24-126-55h83c12 20 27 38 43 55zm-34-71c-11-20-21-42-27-64h166c-6 22-15 44-27 64zM34 328h106c6 22 15 44 26 64H76c-18-19-32-40-42-64zm370 64h-90c11-20 20-42 26-64h106c-10 24-24 45-42 64zm0 0"/><path d="M64 282c1 4 4 6 8 6s7-2 8-6l16-54 16 54c1 4 5 6 8 6 4 0 7-2 8-6l24-88-16-4-16 61-16-53a8 8 0 0 0-16 0l-16 53-16-61-16 4zm0 0M216 288c4 0 7-2 8-6l16-54 16 54c1 4 5 6 8 6 4 0 7-2 8-6l24-88-16-4-16 61-16-53a8 8 0 0 0-16 0l-16 53-16-61-16 4 24 88c1 4 4 6 8 6zm0 0M360 288c4 0 7-2 8-6l16-54 16 54c1 4 5 6 8 6 4 0 7-2 8-6l24-88-16-4-16 61-16-53a8 8 0 0 0-16 0l-16 53-16-61-16 4 24 88c1 4 4 6 8 6zm0 0"/></svg></a>
			</div>
			<table class="post__props">
				<tbody>
					<tr><td>Тип:</td><td>{{ post.type }}</td></tr>
					<tr><td>Роль:</td><td>{{ post.role }}</td></tr>
					<tr><td>Стек:</td><td>{{ post.tools }}</td></tr>
				</tbody>
			</table>			
			<p class="post__descr" v-html="post.descr"></p>

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
	width: 33.33%
	margin: 0 -10px 30px
	padding: 20px
	border-radius: 25px
	font-size: 16px
	overflow: hidden
	transition: box-shadow $animate-speed
	
	&__head
		+flex-min
		margin: 5px 0 10px
	&__title
		margin: 0.4em 0
		padding-left: 5px
		line-height: 1
		color: $color-text
		transition: color $animate-speed
	&__web
		font-size: 0
		opacity: 0
		transform: translateX(30px)
		transition: opacity $animate-speed, transform $animate
	&__svg
		width: 35px
		margin-top: 5px
		fill: #777
		opacity: 0.8
		&:hover
			fill: currentColor
	&__info
		padding: 0 1rem
	&__props
		font-size: 0.85em
		margin-bottom: 20px
		td:first-child
			font-weight: $font-bold
	&__img-wrap
		position: relative
		padding-bottom: 60%
	&__img
		will-change: transform
		position: absolute
		transform-origin: bottom
		transition: transform $animate-speed

	&:hover
		position: relative
		z-index: 2
		box-shadow: 0 0 10px 3px #ddd
		transition: box-shadow $animate*1.2
	&:hover &
		&__img
			transform: scale(1.7)
			transition: transform $animate
		&__title
			color: currentColor
			transition: color $animate
		&__web
			opacity: 1
			transform: none
			transition: opacity $animate, transform $animate
</style>
