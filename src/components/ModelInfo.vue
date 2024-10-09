<script setup>
	import {avg} from "../helpers/avg.js";
	import __ from "@/helpers/translate.js";
	import $config from "@/config.js";
	import {toRaw} from "vue";
	import TgIcon from '@/assets/icons/tg.svg?raw'
	import WpIcon from '@/assets/icons/wp.svg?raw'
	import LocationIcon from '@/assets/icons/location.svg?raw'
	import RatingIcon from '@/assets/icons/rating.svg?raw'
	import AgeIcon from '@/assets/icons/age.svg?raw'
	
	defineProps({
		data: Object,
		limit: Number
	})
</script>

<template>
	<div class="model-info">
		
		<div class="model-name">
			<Transition name="name" mode="out-in">
				<span class="model-name__accent" :key="__(data.first_name)">{{ __(data.first_name) }}</span>
			</Transition>
			<Transition name="name" mode="out-in">
				<span :key="__(data.last_name)">{{ __(data.last_name) }}</span>
			</Transition>
		</div>
		
		<tags :data="data.tags" style="margin-bottom: 20px;"></tags>
		
		<div class="model-info__icons flex wrap">
			<icon-label svg :icon="LocationIcon">
				<Transition name="fade" mode="out-in">
					<span :key="__(data.location)">{{ __(data.location) }}</span>
				</Transition>
			</icon-label>
			<icon-label svg :icon="RatingIcon">
				<spacer size="small">
					<Transition name="fade" mode="out-in">
						<span :key="avg(data.reviews, 'rate')">{{ avg(data.reviews, 'rate').toFixed(1) }}</span>
					</Transition>
					|
					<Transition name="fade" mode="out-in">
						<router-link :to="{name: 'model', params: { model: data.slug ?? 'undefined' }, hash: '#reviews'}" class="underline" :key="data.reviews?.length">
							{{ data.reviews?.length }} {{ $t('shared.reviews_count') }}
						</router-link>
					</Transition>
				</spacer>
			</icon-label>
			<slot name="third"></slot>
			<icon-label svg :icon="AgeIcon">
				<Transition v-if="data.properties" name="fade" mode="out-in">
					<span :key="data.properties.find(({id}) => id === $config.default_properties.age)?.value">{{ data.properties.find(({id}) => id === $config.default_properties.age)?.value }} {{ $t('shared.years') }}</span>
				</Transition>
			</icon-label>
		</div>
		<div class="model-info__properties">
			<slot name="properties" v-if="data.properties">
				<properties :data="toRaw(data.properties).filter(({id}) => !Object.values($config.default_properties).includes(id)).slice(0, limit ?? data.properties.length)" style="margin-bottom: 20px;"></properties>
			</slot>
		</div>
		<spacer style="margin-bottom: 30px;" v-if="data.pricing">
			<Transition name="fade" mode="out-in">
				<span class="price" :key="data.pricing[data.exit ? 'exit' : 'apartments']['1 Час']">{{ data.pricing[data.exit ? 'exit' : 'apartments']['1 Час'] }}$/{{ $t('shared.hours') }}</span>
			</Transition>
			<div class="sep">|</div>
			<Transition name="fade" mode="out-in">
				<span class="price" :key="data.pricing[data.exit ? 'exit' : 'apartments']['2 Часа']">{{ data.pricing[data.exit ? 'exit' : 'apartments']['2 Часа'] }}$/{{ $t('shared.hours_2') }}</span>
			</Transition>
			<div class="sep">|</div>
			<Transition name="fade" mode="out-in">
				<span :key="data.pricing[data.exit ? 'exit' : 'apartments']['Ночь']" class="price">{{ data.pricing[data.exit ? 'exit' : 'apartments']['Ночь'] }}$/{{ $t('shared.night') }}</span>
			</Transition>
		</spacer>
		<spacer class="model-info__footer" size="large">
			<slot name="details">
				<router-link :to="{name: 'model', params: { model: data.slug ?? 'undefined' }}">
					<v-button class="details">
						{{ $t('shared.details')}}
					</v-button>
				</router-link>
			</slot>
			<spacer size="small">
				<a :href="'https://t.me/' + data.tg" target="_blank"><v-button svg circle :icon="TgIcon"></v-button></a>
				<a :href="'https://wa.me/' + data.wp" target="_blank"><v-button svg circle :icon="WpIcon"></v-button></a>
			</spacer>
		</spacer>
	</div>
</template>

<style scoped>


.name-enter-active, .name-leave-active {
	opacity: 0;
	transform: translateY(-20px);
	transition: opacity 0.2s, transform 0.2s;
}

.name-enter {
	opacity: 0;
	transform: translateY(-20px);
}

.name-enter-to {
	opacity: 1;
	transform: translateY(0);
}

.name-leave-active {
	opacity: 0;
}

.name-leave-to {
	opacity: 0;
}

.fade-enter-active, .fade-leave-active {
	opacity: 0;
	transition: opacity 0.2s, transform 0.2s;
}

.fade-enter {
	opacity: 0;
}

.fade-enter-to {
	opacity: 1;
	transform: translateY(0);
}

.fade-leave-active {
	opacity: 0;
}

.fade-leave-to {
	opacity: 0;
}

.model-info__icons {
	margin-bottom: 20px;
	justify-content: space-between;
}
</style>