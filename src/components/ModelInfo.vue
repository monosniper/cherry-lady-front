<script setup>
	import {avg} from "../helpers/avg.js";
	
	defineProps({
		data: Object
	})
</script>

<template>
	<div class="model-info">
		
		<div class="model-name">
			<Transition name="name" mode="out-in">
				<span class="model-name__accent" :key="data?.first_name">{{ data?.first_name }}</span>
			</Transition>
			<Transition name="name" mode="out-in">
				<span :key="data?.last_name">{{ data?.last_name }}</span>
			</Transition>
		</div>
		
		<tags :data="data?.tags" style="margin-bottom: 20px;"></tags>
		
		<div class="model-info__icons flex wrap">
			<icon-label icon="location">
				<Transition name="fade" mode="out-in">
					<span :key="data?.location">{{ data?.location }}</span>
				</Transition>
			</icon-label>
			<icon-label icon="rating">
				<spacer size="small">
					<Transition name="fade" mode="out-in">
						<span :key="avg(data?.reviews, 'rate')">{{ avg(data?.reviews, 'rate').toFixed(1) }}</span>
					</Transition>
					|
					<Transition name="fade" mode="out-in">
						<router-link :to="{name: 'model', params: { model: data?.id }, hash: '#reviews'}" class="underline" :key="data?.reviews.length">
							{{ data?.reviews.length }} отзывов
						</router-link>
					</Transition>
				</spacer>
			</icon-label>
			<slot name="third"></slot>
			<icon-label icon="age">
				<Transition name="fade" mode="out-in">
					<span :key="data?.age">{{ data?.age }} года</span>
				</Transition>
			</icon-label>
		</div>
		<div class="model-info__properties">
			<slot name="properties">
				<properties :data="data?.properties" style="margin-bottom: 20px;"></properties>
			</slot>
		</div>
		<spacer style="margin-bottom: 30px;">
			<Transition name="fade" mode="out-in">
				<span class="price" :key="data?.pricing[1]">{{ data?.pricing[1] }}$/час</span>
			</Transition>
			<div class="sep">|</div>
			<Transition name="fade" mode="out-in">
				<span class="price" :key="data?.pricing[2]">{{ data?.pricing[2] }}$/2 часа</span>
			</Transition>
			<div class="sep">|</div>
			<Transition name="fade" mode="out-in">
				<span :key="data?.pricing.night" class="price">{{ data?.pricing.night }}$/ночь</span>
			</Transition>
		</spacer>
		<spacer class="model-info__footer" size="large">
			<slot name="details">
				<router-link :to="{name: 'model', params: { model: data?.id }}">
					<v-button class="details">
						{{ $t('shared.details')}}
					</v-button>
				</router-link>
			</slot>
			<spacer size="small">
				<a :href="data?.tg" target="_blank"><v-button circle icon="tg"></v-button></a>
				<a :href="data?.wp" target="_blank"><v-button circle icon="wp"></v-button></a>
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