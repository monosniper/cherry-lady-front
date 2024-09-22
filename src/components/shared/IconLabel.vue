<script setup>
	defineProps({
		icon: [String, Object],
		svg: {
			type: Boolean,
			default: false
		},
		reverse: {
			type: Boolean,
			default: false
		},
	})
</script>

<template>
	<div :class="{'icon-label': true, reverse}">
		<v-icon :svg="svg" v-if="icon" :name="icon"></v-icon>
		<slot></slot>
	</div>
</template>

<style scoped>

</style>