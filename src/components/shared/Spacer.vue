<script setup>
const props = defineProps({
	size: {
		type: [String, Number],
		default: 'medium'
	},
	wrap: {
		type: Boolean,
		default: false
	}
})

const gaps = {
	small: 10,
	medium: 20,
	large: 30,
}

const gap = typeof props.size === 'string' ? gaps[props.size] : props.size
</script>

<template>
	<div :class="{spacer: true, wrap}" :style="{gap: gap + 'px'}">
		<slot></slot>
	</div>
</template>

<style scoped>

</style>