<script setup>
	defineProps({
		data: Array
	})
</script>

<template>
	<div class="tags">
		<div class="tag" v-for="item in data">{{ item }}</div>
	</div>
</template>

<style scoped>

</style>