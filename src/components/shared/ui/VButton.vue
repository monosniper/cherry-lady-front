<script setup>
	defineProps({
		icon: [String, Object],
		size: {
			type: String,
			default: 'medium',
		},
		round: {
			type: Boolean,
			default: true
		},
		upper: {
			type: Boolean,
			default: true
		},
		circle: {
			type: Boolean,
			default: false
		},
		reverse: {
			type: Boolean,
			default: false
		},
		dark: {
			type: Boolean,
			default: false
		},
		svg: {
			type: Boolean,
			default: false
		},
	})
</script>

<template>
	<button :class="{ round, upper, circle, dark, ['button--'+size]: true }">
		<icon-label :svg="svg" :icon="icon" :reverse="reverse">
			<slot></slot>
		</icon-label>
	</button>
</template>

<style scoped>

</style>