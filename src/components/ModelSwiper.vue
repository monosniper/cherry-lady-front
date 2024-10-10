<script setup>
import {Carousel, Slide} from 'vue3-carousel'
import {ref} from "vue";

defineProps({
	data: Array,
})

const slider = ref()
const paginationRef = ref()

const handleSlide = ({ currentSlideIndex }) => paginationRef.value.goTo(currentSlideIndex + 1)

</script>

<template>
	<div class="model-slider">
		<Carousel
			ref="slider"
			:itemsToShow="1.2"
			:wrapAround="true"
			:transition="500"
			@slide-end="handleSlide"
			:breakpoints="{
				700: {
					itemsToShow: 1.5,
				},
				800: {
					itemsToShow: 2,
				},
				1100: {
					itemsToShow: 2.8,
				},
				1440: {
					itemsToShow: 3.5,
				},
			}"
		>
			<Slide v-for="image in data" :key="image">
				<div class="carousel__item" :style="{backgroundImage: `url(${image})`}"></div>
			</Slide>
		</Carousel>
		<div class="model-slider__pagination-wrapper">
			<pagination
				@prev="() => slider.prev()"
				@next="() => slider.next()"
				@change="(index) => slider.slideTo(index - 1)"
				ref="paginationRef"
				:total="data.length"
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
	bottom: 30px;
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

@media screen and (max-width: 700px) {
	.model-slider__pagination-wrapper {
		bottom: 30px;
		transform: scale(.8);
	}
	.carousel__track {
		height: 430px;
	}
	.carousel__slide {
		height: 340px;
	}
	.carousel__slide--active {
		height: 430px;
	}
}
</style>