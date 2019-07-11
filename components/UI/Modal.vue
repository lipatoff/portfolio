<template>
	<transition name="modal">
		<div class="modal" @click="$emit('close')">
			<div class="modal__container" @click.stop="">

				<!-- header -->
				<div class="modal__header">
					<span class="modal__title"> {{ title }} </span>
					<span class="modal__close" @click="$emit('close')">×</span>
				</div>

				<!-- body -->
				<div class="modal__body">
					<slot/>
				</div>

			</div>
		</div>
	</transition>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true
		}
	},
	mounted() {
		document.body.addEventListener('keydown', e => {
		if (e.keyCode === 27) this.$emit('close')
		})
	}
}
</script>

<style lang="sass">
.modal
	+fixed
	z-index: 9999
	left: 0
	right: 0
	display: flex
	align-items: center
	justify-content: center
	background-color: #fff
	transition: opacity .2s ease
	&__container
		position: relative
		padding: 20px 20px 5px
		background-color: #fff
	&__header
		display: flex
		align-self: center
		justify-content: space-between
		padding-bottom: 20px
	&__title
		font-weight: $font-header
		font-size: 2em
	&__close     //Х закрыть
		cursor: pointer
		font-size: 50px
		font-family: serif
	&__body
		+touch
		overflow-y: auto
		max-height: 80vh

	+media(m)
		background-color: rgba(0,0,0,.4)

//animation
.modal-enter, .modal-leave-active
	opacity: 0;

.modal-enter .modal-content, .modal-leave-active .modal-content
	transform: scale(1.2)

</style>