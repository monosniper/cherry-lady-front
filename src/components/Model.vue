<script setup>
	import StarIcon from '@icons/star.svg?raw'
	import Tags from '@/components/shared/Tags.vue'
	import __ from "@/helpers/translate.js";
	import Properties from '@/components/shared/Properties.vue'
	import {avg} from "../helpers/avg.js";

	defineProps({
		images: Array,
		first_name: Object,
		tags: Array,
		properties: Array,
		pricing: Object,
		reviews: Array,
		exit: Boolean,
		id: Number,
		slug: String,
		tg: String,
		wp: String,
	})
</script>

<template>
	<div class="model">
		<div class="model__header">
			<div class="model__name">{{ __(first_name) }}</div>
			<spacer size="small">
				<a :href="tg" target="_blank"><v-button size="xs" circle icon="tg"></v-button></a>
				<a :href="wp" target="_blank"><v-button size="xs" circle icon="wp"></v-button></a>
			</spacer>
		</div>
		<div class="model__body">
			<div class="model__top">
				<div class="model__img" :style="{backgroundImage: `url(${images[0]})`}">
					<div class="rating">
						<icon-label :icon="StarIcon" svg>{{ avg(reviews).toFixed(1) }}</icon-label>
					</div>
				</div>
				<div class="model__tags">
					<tags :limit="8" size="small" :data="tags"></tags>
				</div>
			</div>
			<div class="model__properties">
				<properties :data="[...properties, {
					id: 'price',
					type: 'range',
					name: {
						ru: 'Цена',
						en: 'Price',
					},
					value: `от ${pricing[exit ? 'exit' : 'apartments']['1 Час']}$/час`,
					accent: true
				}]"></properties>
			</div>
			<router-link :to="{name: 'model', params: { model: slug }}" class="model__button">
				{{ $t('shared.details') }}
			</router-link>
		</div>
	</div>
</template>

<style scoped>
	.model:hover {
		z-index: 10;
		backdrop-filter: blur(35px);
		box-shadow: 0 3px 0 0 rgba(192, 27, 88, 0.81), 0 -4px 3px 0 rgba(192, 27, 88, 0.9);
		
		.model__img {
			height: 260px;
		}
		
		.model__tags {
			width: 100px;
			opacity: 1;
		}
		
		.model__top {
			gap: 10px;
		}
		
		.model__properties {
			opacity: 1;
			height: 190px;
		}
		.model__button {
			opacity: 1;
		}
		
		.model__body {
			border-left: 1px solid rgba(192, 27, 88, 0.2);
			border-right: 1px solid rgba(192, 27, 88, 0.2);
		}
	}
	
	

	.model {
		backdrop-filter: blur(35px);
		box-shadow: 0 4px 35px 0 rgba(0, 0, 0, 0.13), 0 3px 0 0 rgba(0, 0, 0, 0.15), 0 -3px 0 0 rgba(0, 0, 0, 0.15);
		border-radius: 30px;
		max-height: 420px;
		transition: .1s ease-in;
		
		
		.model__body {
			padding: 7px;
			position: relative;
			background: #fff;
			border-bottom-left-radius: 30px;
			border-bottom-right-radius: 30px;
			overflow: hidden;
		}
		
		.model__button {
			opacity: 0;
			backdrop-filter: blur(35px);
			box-shadow: 0 11px 34px 0 rgba(255, 0, 64, 0.49), 0 4px 0 0 #a4003d;
			background: var(--color-accent);
			color: white;
			text-transform: uppercase;
			font-size: 15px;
			letter-spacing: 0.13em;
			font-weight: 600;
			display: flex;
			align-items: center;
			justify-content: center;
			height: 65px;
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			border-bottom-left-radius: 30px;
			border-bottom-right-radius: 30px;
			z-index: 10;
			transition: .1s ease-in;
			cursor: pointer;
			text-decoration: none;
		}
		
		.model__button:hover {
			background: #ea436b;
		}
		
		.model__properties {
			padding: 0 10px;
			opacity: 0;
			height: 0;
			transition: .1s ease-in;
		}
		
		.model__name {
			font-size: 21px;
			font-weight: 700;
		}
		
		.model__top {
			display: flex;
			margin-bottom: 10px;
		}
		
		.model__tags {
			width: 0;
			transition: .1s ease-in;
			opacity: 0;
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
			position: relative;
			transition: .1s ease-in;
			flex: 1;
			
			.rating {
				bottom: 40px;
			}
		}
	}
	
	@media screen and (max-width: 600px) {
		.model {
			height: fit-content;
			max-height: none;
			z-index: 10;
			backdrop-filter: blur(35px);
			box-shadow: 0 3px 0 0 rgba(192, 27, 88, 0.81), 0 -4px 3px 0 rgba(192, 27, 88, 0.9);
			
			.model__img {
				height: 260px;
			}
			
			.model__tags {
				width: 100px;
				opacity: 1;
			}
			
			.model__top {
				gap: 10px;
			}
			
			.model__properties {
				opacity: 1;
				height: 170px;
			}
			.model__button {
				opacity: 1;
			}
			
			.model__body {
				border-left: 1px solid rgba(192, 27, 88, 0.2);
				border-right: 1px solid rgba(192, 27, 88, 0.2);
			}
		}
	}
</style>