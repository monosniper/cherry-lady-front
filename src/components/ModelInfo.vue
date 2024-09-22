<script setup>
	import ModelsStore from "@/stores/models.js";
	
	const { current } = ModelsStore
</script>

<template>
	<div class="model-info">
		
			<div class="model-name">
				<span class="model-name__accent">{{ current.first_name }} </span>
<!--				<Transition name="fade"><span :key="current.last_name">{{ current.last_name }}</span></Transition>-->
				{{ current.last_name }}
			</div>
		
		<tags :data="current.tags" style="margin-bottom: 20px;"></tags>
		<div class="flex between" style="margin-bottom: 20px;">
			<icon-label icon="location">{{ current.location }}</icon-label>
			<icon-label icon="rating">
				<spacer size="small">
					<span>{{ current.rating }}</span>
					|
					<router-link to="/" class="underline">{{ current.reviews }} отзывов</router-link>
				</spacer>
			</icon-label>
			<icon-label icon="age">{{ current.age }} года</icon-label>
		</div>
		<properties :data="current.properties" style="margin-bottom: 20px;"></properties>
		<spacer style="margin-bottom: 30px;">
			<span class="price">{{ current.pricing[1] }}$/час</span>
			<div class="sep">|</div>
			<span class="price">{{ current.pricing[2] }}$/2 часа</span>
			<div class="sep">|</div>
			<span class="price">{{ current.pricing.night }}$/ночь</span>
		</spacer>
		<spacer size="large">
			<v-button style="padding: 30px 50px;">
				{{ $t('shared.details')}}
			</v-button>
			<spacer size="small">
				<v-button circle icon="tg"></v-button>
				<v-button circle icon="wp"></v-button>
			</spacer>
		</spacer>
	</div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
	transition: opacity 0.5s, transform 0.5s;
}

.fade-enter {
	opacity: 0;
	transform: translateY(20px);
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
</style>