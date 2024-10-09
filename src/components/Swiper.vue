<script setup>
import {onMounted, onUnmounted, ref, watch} from "vue";
	import StarIcon from '@icons/star.svg?raw'
	import {findValueForRange} from "@/helpers/findValueForRange.js";
	import ModelsStore from "@/stores/models.js";
	import __ from "@/helpers/translate.js";
	import {avg} from "../helpers/avg.js";
	
	const props = defineProps({
		data: Array,
	})
	
	const modelsStore = ModelsStore
	
	const slider = ref()
	const paginationRef = ref()
	const space = ref(200)
	const innerWidth = ref(1400)
	const size = ref([400, 600])

	const handleResize = () => innerWidth.value = window.innerWidth

	onMounted(() => {
		window.addEventListener('resize', handleResize)
		innerWidth.value = window.innerWidth
	})
	
	onUnmounted(() => window.removeEventListener('resize', handleResize))

	watch(innerWidth, (value) => {
		space.value = findValueForRange({
			0: 40,
			440: 100,
			1200: 200,
		}, value)
		
		size.value = findValueForRange({
			0: [270, 430],
			1200: [400, 600],
		}, value)
	})

	const models = ref(props.data)

	watch(() => props.data.length, (val) => {
		models.value = props.data
	})
</script>

<template>
	<carousel-3d
		v-if="models.length"
		ref="slider"
		class="swiper-container"
		:display="3"
		:width="size[0]"
		:height="size[1]"
		:perspective="0"
		:space="space"
		:inverse-scaling="40"
		:border="0"
		@before-slide-change="index => paginationRef.goTo(index + 1)"
	>
		<slide class="slide" :index="i" v-for="(model, i) in models.filter(model => model.images.length)">
			<div class="slide-model">
				<div class="rating">
					<icon-label :icon="StarIcon" svg>{{ avg(model.reviews, 'rate').toFixed(1) }}</icon-label>
				</div>
				<img :src="model.images[0]" :alt="__(model.first_name)">
			</div>
		</slide>
	</carousel-3d>
	
	<pagination
		v-if="models.length"
		@prev="() => slider.goPrev()"
		@next="() => slider.goNext()"
		@change="(index) => modelsStore.setCurrent(models[index - 1])"
		ref="paginationRef"
		:total="models.length"
	></pagination>
</template>

<style scoped>
	.swiper-container {
		overflow: visible;
		margin-bottom: 25px;
	}
	
	.slide-model {
		position: relative;
		height: 100%;
	}
	
	.rating {
		color: white;
		top: 35px;
	}

	.slide {
		border-radius: 30px;
		filter: grayscale(100%);
		transition: .5s !important;
		
		img {
			min-width: 100%;
			min-height: 100%;
			max-height: 100%;
			object-fit: cover;
		}
	}
	
	.slide.current {
		filter: none;
		box-shadow: 0 4px 52px 0 rgba(0, 0, 0, 0.39);
		
		.rating {
			color: var(--color-accent);
		}
	}
</style>