<script setup>
	import {onMounted, onUnmounted, ref, watch} from "vue";
	import StarIcon from '@icons/star.svg?raw'
	import {findValueForRange} from "@/helpers/findValueForRange.js";
	import ModelsStore from "@/stores/models.js";
	
	const modelsStore = ModelsStore
	const { data: models } = modelsStore
	
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
			0: 80,
			400: 100,
			1200: 200,
		}, value)
		
		size.value = findValueForRange({
			0: [270, 430],
			1200: [400, 600],
		}, value)
	})
</script>

<template>
	<carousel-3d
		ref="slider"
		class="container"
		:display="3"
		:width="size[0]"
		:height="size[1]"
		:perspective="0"
		:space="space"
		:inverse-scaling="40"
		:border="0"
		@before-slide-change="index => paginationRef.goTo(index + 1)"
	>
		<slide class="slide" :index="i" v-for="(model, i) in models">
			<div class="model">
				<div class="rating">
					<icon-label :icon="StarIcon" svg>{{ model.rating }}</icon-label>
				</div>
				<img :src="model.image" :alt="model.first_name">
			</div>
		</slide>
	</carousel-3d>
	
	<pagination
		@prev="() => slider.goPrev()"
		@next="() => slider.goNext()"
		@change="(index) => modelsStore.setCurrent(models[index - 1])"
		ref="paginationRef"
		:total="models.length"
	></pagination>
</template>

<style scoped>
	.container {
		overflow: visible;
		margin-bottom: 25px;
	}
	
	.model {
		position: relative;
		height: 100%;
	}
	
	.rating {
		position: absolute;
		top: 35px;
		font-size: 18px;
		color: white;
		backdrop-filter: blur(35px);
		box-shadow: 0 2px 0 0 rgba(192, 27, 88, 0.81), 0 -2px 4px 0 rgba(192, 27, 88, 0.9);
		background: linear-gradient(136deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
		border-top-right-radius: 20px;
		border-bottom-right-radius: 20px;
		padding: 7px 20px;
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