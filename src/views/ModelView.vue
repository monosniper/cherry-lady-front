<script setup>
	import {useRoute} from "vue-router";
	import ModelsStore from "@/stores/models.js";
	
	const route = useRoute()
	const modelsStore = ModelsStore
	const { data: models } = modelsStore
	const model = models.find(model => model.id.toString() === route.params.model)
</script>

<template>
	<model-swiper style="margin-top: 1rem;"></model-swiper>
	<model-info-main :model="model"></model-info-main>
	<preferences :data="model.tags"></preferences>
	<reviews :data="model.reviews"></reviews>
</template>

<style scoped>

</style>