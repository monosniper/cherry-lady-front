<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import CategoryStore from "@/stores/categories.js";
import __ from '@/helpers/translate.js'

const { data: categories } = CategoryStore

</script>

<template>
	<div class="categories">
		<swiper
			:slides-per-view="'auto'"
			free-mode
			:space-between="30"
			style="width: 100%;"
		>
			<swiper-slide
				class="swiper-slide"
				v-for="category in categories"
			>
				<div
					class="category"
					@click=""
				>{{ __(category.name) }}</div>
			</swiper-slide>
		</swiper>
	</div>
</template>

<style>
	.categories {
		height: 55px;
		display: flex;
		align-items: center;
		width: 800px;
	}
	
	.swiper-slide {
		width: fit-content !important;
	}
	
	.category {
		color: var(--color-accent);
		font-size: 16px;
		cursor: pointer;
		width: fit-content;
	}
	
	.category_active {
		font-weight: bold;
	}
</style>