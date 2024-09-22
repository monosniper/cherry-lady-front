<script setup>
	import {ref} from "vue";
	
	const props = defineProps({
		name: [String, Object],
		width: [String, Number],
		svg: {
			type: Boolean,
			default: false
		}
	})
	
	const src = ref('')
	
	if(!props.svg) {
		import(`@icons/${props.name}.png`)
			.then(rs => src.value = rs.default)
	}
</script>

<template>
	<img :style="`width: ${width + 'px' ?? 'auto'}`" :src="src" :alt="name" v-if="!svg">
	<i v-else v-html="name"></i>
</template>

<style scoped>
	img {
		max-width: 100%;
		max-height: 100%;
	}
</style>