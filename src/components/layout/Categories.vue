<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import CategoryStore from "@/stores/categories.js";
import __ from '@/helpers/translate.js'
import FilterStore from "@/stores/filters.js";
import {useRoute, useRouter} from "vue-router";
import BurgerIcon from '@/assets/icons/burger.svg?raw'
import {ref, watch} from "vue";

const { data: categories } = CategoryStore
const {
	filters,
} = FilterStore

const route = useRoute()
const router = useRouter()

const handleClick = (id) => {
	filters.category = id
	
	if(route.name !== 'catalogue') {
		router.push('/catalogue')
	}
}
const drawer = ref(false)
if(route.query.category) {
	if(route.name !== 'catalogue') {
		router.push('/catalogue?category='+route.query.category)
	}
	filters.category = parseInt(route.query.category)
}
watch(() => route.query.category, category => {
	if(route.name !== 'catalogue') {
		router.push('/catalogue?category='+category)
	}
	filters.category = parseInt(category)
})
</script>

<template>
	<div class="categories">
		<div class="categories__burger" @click="drawer = true">
			<v-icon svg :name="BurgerIcon"></v-icon>
		</div>
		<swiper
			class="swiper"
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
					:class="['category', {category_active: category.id === filters.category}]"
					@click="handleClick(category.id)"
				>{{ __(category.name) }}</div>
			</swiper-slide>
		</swiper>
		<el-drawer v-model="drawer" size="100%">
			<div class="categories__vertical">
				<div
					v-for="category in categories"
					:class="['category', {category_active: category.id === filters.category}]"
					@click="handleClick(category.id)"
				>{{ __(category.name) }}</div>
			</div>
		</el-drawer>
	</div>
</template>

<style>
	.categories {
		height: 55px;
		display: flex;
		align-items: center;
		width: 800px;
	}
	
	.categories__burger {
		display: none;
		
		align-items: center;
		justify-content: center;
		
		svg {
			width: 30px;
			height: 30px;
		}
		
		i {
			display: flex;
		}
	}
	
	.categories__vertical {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		padding-bottom: 5rem;
		align-items: center;
		
		.category {
			font-size: 20px;
			
		}
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
	
	@media screen and (max-width: 1350px) {
		.categories {
			width: 600px;
		}
	}
	
	@media screen and (max-width: 1150px) {
		.categories {
			width: 400px;
		}
	}
	
	@media screen and (max-width: 960px) {
		.categories {
			width: 300px;
		}
	}
	
	@media screen and (max-width: 800px) {
		.categories {
			width: fit-content;
			
			.swiper {
				display: none;
			}
			
			.categories__burger {
				display: flex;
			}
		}
		
		.header__wrapper {
			gap: 1rem !important;
		}
	}
</style>