<script setup>
	import ModelsStore from "@/stores/models.js";
	const modelsStore = ModelsStore
	const { data } = modelsStore
</script>

<template>
	<div class="container">
		<div class="center" style="margin-bottom: 2rem;">
			<type-switch></type-switch>
		</div>
		<Filter></Filter>
		<models :models="data.filter(({ images }) => images.length)"></models>
	</div>
</template>

<style scoped>

</style>