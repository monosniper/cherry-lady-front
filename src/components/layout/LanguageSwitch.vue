<script setup>
import {ref, watch} from "vue";
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
import {useRoute} from "vue-router";
	
	// const current = ref({
	// 	name: 'ru',
	// 	icon: RuIcon
	// })

	// const languages = [{
	// 	name: 'ru',
	// 	icon: RuIcon
	// }, {
	// 	name: 'en',
	// 	icon: EnIcon
	// }]
	
	// watch(current, (lang) => i18n.global.locale = lang.name)
const current = ref(locale.value)
const languages = ['en', 'ru', 'ar']

watch(current, (lang) => {
	locale.value = lang
	if (lang === 'ar') {
		document.documentElement.setAttribute('dir', 'rtl');
	} else {
		document.documentElement.setAttribute('dir', 'ltr');
	}
})
const route = useRoute()
watch(() => route.query.lang, lang => {
	if(lang === 'en' || lang === 'ru' || lang === 'ar') {
		current.value = lang
	}
	if (lang === 'ar') {
		document.documentElement.setAttribute('dir', 'rtl');
	} else {
		document.documentElement.setAttribute('dir', 'ltr');
	}
})
</script>

<template>
<!--	<div class="lang">-->
<!--		<div class="lang__item">-->
<!--			<div class="lang__flag">-->
<!--				<v-icon svg :width="25" :name="current.icon"></v-icon>-->
<!--			</div>-->
<!--			<div class="lang__current">{{ current.name }}</div>-->
<!--		</div>-->
<!--		-->
<!--		<div class="lang__menu">-->
<!--			<div class="lang__item" @click="current = lang" v-for="lang in languages.filter(l => l.name !== current.name)">-->
<!--				<div class="lang__flag">-->
<!--					<v-icon svg :width="25" :name="lang.icon"></v-icon>-->
<!--				</div>-->
<!--				<div class="lang__current">{{ lang.name }}</div>-->
<!--			</div>-->
<!--		</div>-->
<!--	</div>-->
	<div class="lang">
		<div class="lang__item">
			<div class="lang__flag">
				<v-icon :width="25" v-show="current === 'en'" name="en"></v-icon>
				<v-icon :width="25" v-show="current === 'ru'" name="ru"></v-icon>
				<v-icon :width="25" v-show="current === 'ar'" name="ar"></v-icon>
			</div>
			<div class="lang__current">{{ current }}</div>
		</div>
		
		<div class="lang__menu">
			<div class="lang__item" @click="current = lang" v-for="lang in languages.filter(l => l !== current)">
				<div class="lang__flag">
					<v-icon :width="25" v-show="lang === 'en'" name="en"></v-icon>
					<v-icon :width="25" v-show="lang === 'ru'" name="ru"></v-icon>
					<v-icon :width="25" v-show="lang === 'ar'" name="ar"></v-icon>
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
			backdrop-filter: blur(35px);
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
			gap: 5px;
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
	
	@media screen and (max-width: 400px) {
		.lang {
			.lang__item {
				width: 60px;
				height: 30px;
			}
			.lang__flag {
				img {
					width: 20px !important;
				}
			}
		}
	}
</style>