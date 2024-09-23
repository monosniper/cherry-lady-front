<script setup>
import {ref, watch} from "vue";
import {i18n} from "@/i18n.js";
	
	const current = ref('ru')
	const languages = ['en', 'ru']
	
	watch(current, (lang) => i18n.global.locale = lang)
</script>

<template>
	<div class="lang">
		<div class="lang__item">
			<div class="lang__flag">
				<v-icon :width="25" :name="current"></v-icon>
			</div>
			<div class="lang__current">{{ current }}</div>
		</div>
		
		<div class="lang__menu">
			<div class="lang__item" @click="current = lang" v-for="lang in languages.filter(l => l !== current)">
				<div class="lang__flag">
					<v-icon :width="25" :name="lang"></v-icon>
				</div>
				<div class="lang__current">{{ lang }}</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.lang:hover .lang__menu {
		opacity: 1;
	}

	.lang {
		z-index: 10;
		position: relative;
		
		.lang__item {
			backdrop-filter: blur(35.83000183105469px);
			box-shadow: 0 2px 0 0 rgba(192, 27, 88, 0.81), 0 -2px 4px 0 rgba(192, 27, 88, 0.9);
			background: linear-gradient(136deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
			width: 80px;
			height: 40px;
			display: flex;
			border-radius: 5px;
			transition: .1s ease-in-out;
			cursor: pointer;
		}
		
		.lang__item:hover {
			background: #eeeeee;
		}
		
		.lang__menu {
			top: 50px;
			left: 0;
			right: 0;
			transition: .1s ease-in-out;
			opacity: 0;
			display: flex;
			flex-direction: column;
			position: absolute;
		}
		
		.lang__current {
			text-transform: uppercase;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 12px;
			color: var(--color-dark);
			width: 50%;
		}
		
		.lang__flag {
			width: 50%;
			border-right: 1px solid rgba(74, 28, 143, .4);
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>