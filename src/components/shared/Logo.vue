<script setup>
	const props = defineProps({
		dark: {
			type: Boolean,
			default: false
		}
	})
	
	import {ref} from "vue";
	
	const icon = import(`@images/${props.dark ? 'logo_dark' : 'logo'}.png`)
	const src = ref('')
	
	icon.then(rs => src.value = rs.default)
</script>

<template>
	<router-link class="logo" to="/">
		<img :src="src" alt="Logo">
	</router-link>
</template>

<style scoped>

</style>