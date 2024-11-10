<script setup>
	import ModelsStore from "@/stores/models.js";
	import {computed} from "vue";
	import FilterStore from "@/stores/filters.js";
	const modelsStore = ModelsStore
	const {
		filters,
	} = FilterStore
	const filtered = computed(() => modelsStore.filtered().filter(({ category_ids }) => {
		let filter = true
		if (filters.category) {
			if(!category_ids.includes(filters.category)) filter = false
		}
		return filter
	}))
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