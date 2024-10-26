<script setup>
	import LogoIcon from '@/assets/icons/logo.svg?raw'
	import DarkLogoIcon from '@/assets/icons/logo_dark.svg?raw'
	import FilterStore from '@/stores/filters.js'

	const props = defineProps({
		dark: {
			type: Boolean,
			default: false
		}
	})
	
	const src = props.dark ? DarkLogoIcon : LogoIcon
	
	const {filters} = FilterStore
</script>

<template>
	<router-link class="logo" to="/" @click="filters.category = null">
		<v-icon svg :name="src"></v-icon>
	</router-link>
</template>

<style scoped>

</style>