<script setup>

import StarIcon from '@icons/star.svg?raw'

	defineProps({
		image: String,
		first_name: String,
		tags: Array,
		properties: Array,
		pricing: Object,
		rating: Number,
	})

</script>

<template>
	<div class="model">
		<div class="model__header">
			<div class="model__name">{{ first_name }}</div>
			<spacer size="small">
				<v-button size="xs" circle icon="tg"></v-button>
				<v-button size="xs" circle icon="wp"></v-button>
			</spacer>
		</div>
		<div class="model__img" :style="{backgroundImage: `url(${image})`}">
			<div class="rating">
				<icon-label :icon="StarIcon" svg>{{ rating }}</icon-label>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.model {
		backdrop-filter: blur(35px);
		box-shadow: 0 4px 35px 0 rgba(0, 0, 0, 0.13), 0 3px 0 0 rgba(0, 0, 0, 0.15), 0 -3px 0 0 rgba(0, 0, 0, 0.15);
		border-radius: 30px;
		padding: 7px;
		
		.model__name {
			font-size: 21px;
			font-weight: 700;
		}
		
		.model__header {
			display: flex;
			justify-content: space-between;
			gap: 1rem;
			align-items: center;
			padding: 10px 15px;
		}
		
		.model__img {
			background-position: top;
			background-size: cover;
			border-radius: 30px;
			height: 350px;
			
			.rating {
				bottom: 40px;
			}
		}
	}
</style>