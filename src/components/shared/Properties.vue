<script setup>
	defineProps({
		data: Array
	})
</script>

<template>
	<div class="properties">
		<div class="property"
			v-for="item in data"
		>
			<div class="property__item property__key">{{ item.key }}</div>
			<div class="property__item property__value">{{ item.value }}</div>
		</div>
	</div>
</template>

<style scoped>

</style>