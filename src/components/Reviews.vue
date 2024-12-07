<script setup>
	import {ref} from "vue";
	import __ from "@/helpers/translate.js";
	import {Carousel, Slide} from 'vue3-carousel'
	
	defineProps({
		data: Array
	})
	
	const slider = ref()
	const paginationRef = ref()
	
	const handleSlide = ({ currentSlideIndex }) => paginationRef.value.goTo(currentSlideIndex + 1)
</script>

<template>
	<div id="reviews" class="title"><span class="gray">{{ $t('shared.reviews.1') }}</span> {{ $t('shared.reviews.2') }}</div>
	<Carousel
		class="reviews"
		ref="slider"
		:itemsToShow="1.2"
		:wrapAround="true"
		:transition="500"
		@slide-end="handleSlide"
		:breakpoints="{
			1000: {
				itemsToShow: 1.5,
			},
			1200: {
				itemsToShow: 2,
			},
			1440: {
				itemsToShow: 2.5,
			},
		}"
	>
		<Slide v-for="(review, i) in data" :key="i">
			<div class="review">
				<div class="review__date">{{ review.published_at }}</div>
				<el-space class="review__rate">
					<span>{{ $t('shared.rate') }}: <span class="accent">{{ review.rate.toFixed(1) }}</span></span>
					<el-rate
						size="large"
						v-model="review.rate"
						disabled
						:colors="['#C01B58', '#C01B58', '#C01B58']"
					/>
				</el-space>
				<div class="review__content">{{ __(review.content) }}</div>
			</div>
		</Slide>
	</Carousel>
	<pagination
		@prev="() => slider.prev()"
		@next="() => slider.next()"
		@change="(index) => slider.slideTo(index - 1)"
		ref="paginationRef"
		:total="data.length"
		style="margin-bottom: 5rem;"
	></pagination>
</template>

<style>
	.title {
		font-size: 40px !important;
		text-align: center;
		font-weight: bold;
		color: var(--color-dark);
		font-family: Montserrat, sans-serif;
		
		.gray {
			color: #9C9C9C;
			font-weight: bold;
		}
	}
	
	.reviews {
		padding: 10px 0;
		
		.carousel__viewport {
			padding: 10px 0;
		}
	}
	
	.review {
		padding: 50px;
		border-radius: 30px;
		text-align: left;
		backdrop-filter: blur(35px);
		box-shadow: 0 3px 0 0 rgba(192, 27, 88, 0.81), 0 -4px 3px 0 rgba(192, 27, 88, 0.9);
		font-size: 16px;
		width: 760px;
		
		.review__date {
			margin-bottom: .5rem;
		}
		
		.review__rate {
			font-size: 18px;
			margin-bottom: 1rem;
		}
		
		.review__content {
			color: #676767;
		}
		
		
	}
	
	@media screen and (max-width: 700px) {
		.review {
			padding: 20px;
		}
	}
</style>