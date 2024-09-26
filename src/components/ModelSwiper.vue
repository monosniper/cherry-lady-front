<script setup>
import ModelsStore from "@/stores/models.js";
import {Carousel, Slide} from 'vue3-carousel'
import {ref} from "vue";

const modelsStore = ModelsStore
const {data: models} = modelsStore

const slider = ref()
const paginationRef = ref()

const handleSlide = ({ currentSlideIndex }) => paginationRef.value.goTo(currentSlideIndex + 1)

</script>

<template>
	<div class="model-slider">
		<Carousel
			ref="slider"
			:itemsToShow="3.95"
			:wrapAround="true"
			:transition="500"
			@slide-end="handleSlide"
		>
			<Slide v-for="model in models" :key="model.id">
				<div class="carousel__item" :style="{backgroundImage: `url(${model.image})`}"></div>
			</Slide>
		</Carousel>
		<div class="model-slider__pagination-wrapper">
			<pagination
				@prev="() => slider.prev()"
				@next="() => slider.next()"
				@change="(index) => slider.slideTo(index - 1)"
				ref="paginationRef"
				:total="models.length"
				class="model-slider__pagination"
			></pagination>
		</div>
	</div>
</template>

<style>
.model-slider {
	position: relative;
}

.model-slider__pagination-wrapper {
	position: absolute;
	bottom: 50px;
	display: flex;
	justify-content: center;
	z-index: 10;
	width: 100%;
}

.model-slider__pagination {
	background: rgba(4, 2, 15, .5);
	padding: 5px 10px;
	border-radius: 5px;
	color: white !important;
	
	.pagination__total {
		color: #999999 !important;
	}
}
</style>