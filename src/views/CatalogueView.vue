<script setup>
	import ModelsStore from "@/stores/models.js";
	import {computed} from "vue";
	const modelsStore = ModelsStore
	const filtered = computed(() => modelsStore.filtered())
</script>

<template>
	<div class="container">
		<div class="center" style="margin-bottom: 2rem;">
			<type-switch></type-switch>
		</div>
		<Filter :total="filtered.length"></Filter>
		<models :data="filtered"></models>
	</div>
</template>

<style scoped>

</style>