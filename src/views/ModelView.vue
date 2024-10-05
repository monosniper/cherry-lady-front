<script setup>
import {useRoute, useRouter} from "vue-router";
	import ModelsStore from "@/stores/models.js";
	import {computed, ref, watch} from "vue";
	
	const route = useRoute()
	const router = useRouter()
	const modelsStore = ModelsStore
	const { data: models } = modelsStore
	const model = computed(() => models.value.find(({ slug }) => slug === route.params.model))
</script>

<template>
	<div v-if="model">
		<div class="container" style="margin-bottom: 2rem;">
			<v-button @click="router.go(-1)" icon="back" size="small">
				{{ $t('shared.back') }}
			</v-button>
		</div>
		<model-swiper :data="model.images" style="margin-top: 1rem;"></model-swiper>
		<model-info-main :model="model"></model-info-main>
		<preferences :data="model.services"></preferences>
		<reviews :data="model.reviews"></reviews>
	</div>
</template>

<style scoped>

</style>