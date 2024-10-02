<script setup>
	import {useRoute} from "vue-router";
	import ModelsStore from "@/stores/models.js";
	import {ref, watch} from "vue";
	
	const route = useRoute()
	const modelsStore = ModelsStore
	const { data: models } = modelsStore
	const model = ref(models.value.find(({ slug }) => slug === route.params.model))
</script>

<template>
	<div v-if="model">
		<model-swiper :data="model.images" style="margin-top: 1rem;"></model-swiper>
		<model-info-main :model="model"></model-info-main>
		<preferences :data="model.services"></preferences>
		<reviews :data="model.reviews"></reviews>
	</div>
</template>

<style scoped>

</style>