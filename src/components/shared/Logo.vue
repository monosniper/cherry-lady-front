<script setup>
	import LogoIcon from '@/assets/icons/logo.svg?raw'
	import DarkLogoIcon from '@/assets/icons/logo_dark.svg?raw'

	const props = defineProps({
		dark: {
			type: Boolean,
			default: false
		}
	})
	
	const src = props.dark ? DarkLogoIcon : LogoIcon
</script>

<template>
	<router-link class="logo" to="/">
		<v-icon svg :name="src"></v-icon>
	</router-link>
</template>

<style scoped>

</style>