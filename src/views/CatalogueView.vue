<script setup>
	import ModelsStore from "@/stores/models.js";
	import {computed} from "vue";
	const modelsStore = ModelsStore
	const filtered = computed(() => modelsStore.filtered())
</script>

<template>
	<div class="container">
		<div class="center">
			<type-switch></type-switch>
		</div>
		<Filter :total="filtered.length"></Filter>
		<models :data="filtered"></models>
	</div>
</template>

<style scoped>
.center {
	margin-bottom: 2rem;
}
	@media screen and (max-width: 500px) {
		.center {
			margin-bottom: 15px;
		}
	}
</style>