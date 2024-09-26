<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import ModelsStore from "@/stores/models.js";

const modelsStore = ModelsStore
const { data: models } = modelsStore
</script>

<template>
	<Splide :options="{
		type: 'loop',
		gap: '15px',
		rewind: false,
		perMove: 1,
		arrows: false,
		pagination: false,
		autoWidth: true,
		cover: true,
		focus: 'center',
	}">
		<SplideSlide v-for="model in models" :key="model.id">
			<img :src="model.image" alt="Sample 1">
		</SplideSlide>
	</Splide>
</template>

<style scoped>
	.splide__slide.is-active {
		filter: none;
		height: 630px;
		width: 500px;
	}
	.splide__slide {
		transition: .1s ease-in;
		background-position: top !important;
		width: 400px;
		height: 500px;
		border-radius: 30px;
		filter: grayscale(100%);
		box-shadow: 0 4px 52px 0 rgba(0, 0, 0, 0.39);
	}
	
</style>