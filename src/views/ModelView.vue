<script setup>
	import {useRoute} from "vue-router";
	import ModelsStore from "@/stores/models.js";
	
	const route = useRoute()
	const modelsStore = ModelsStore
	const { data: models } = modelsStore
	const model = models.find(model => model.id === route.params.id)
</script>

<template>
	<model-swiper></model-swiper>
	<model-info-main :model="model"></model-info-main>
	<preferences></preferences>
	<reviews></reviews>
</template>

<style scoped>

</style>