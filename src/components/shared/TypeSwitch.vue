<script setup>
	import SwipeIcon from '@icons/swipe.svg?raw'
	import CatalogueIcon from '@icons/catalogue.svg?raw'
	import {useRoute} from "vue-router";
	import {computed} from "vue";
	
	const route = useRoute()
	
	const name = computed(() => route.name)
</script>

<template>
	<div class="switch">
		<router-link to="/" :class="{active: name === 'home'}">
			<icon-label :icon="SwipeIcon" svg reverse>{{ $t('shared.swipe') }}</icon-label>
		</router-link>
		<router-link to="catalogue" :class="{active: name === 'catalogue'}">
			<icon-label :icon="CatalogueIcon" svg reverse>{{ $t('shared.catalogue') }}</icon-label>
		</router-link>
	</div>
</template>

<style scoped>

</style>