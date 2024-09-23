<script setup>
	import ModelsStore from "@/stores/models.js";
	
	const { current } = ModelsStore
</script>

<template>
	<div class="model-info">
		
		<div class="model-name">
			<Transition name="name" mode="out-in">
				<span class="model-name__accent" :key="current.first_name">{{ current.first_name }}</span>
			</Transition>
			<Transition name="name" mode="out-in">
				<span :key="current.last_name">{{ current.last_name }}</span>
			</Transition>
		</div>
		
		<tags :data="current.tags" style="margin-bottom: 20px;"></tags>
		
		<div class="flex between wrap" style="margin-bottom: 20px;">
			<icon-label icon="location">
				<Transition name="fade" mode="out-in">
					<span :key="current.location">{{ current.location }}</span>
				</Transition>
			</icon-label>
			<icon-label icon="rating">
				<spacer size="small">
					<Transition name="fade" mode="out-in">
						<span :key="current.rating">{{ current.rating }}</span>
					</Transition>
					|
					<Transition name="fade" mode="out-in">
						<router-link to="/" class="underline" :key="current.reviews">{{ current.reviews }} отзывов</router-link>
					</Transition>
				</spacer>
			</icon-label>
			<icon-label icon="age">
				<Transition name="fade" mode="out-in">
					<span :key="current.age">{{ current.age }} года</span>
				</Transition>
			</icon-label>
		</div>
		<properties :data="current.properties" style="margin-bottom: 20px;"></properties>
		<spacer style="margin-bottom: 30px;">
			<Transition name="fade" mode="out-in">
				<span class="price" :key="current.pricing[1]">{{ current.pricing[1] }}$/час</span>
			</Transition>
			<div class="sep">|</div>
			<Transition name="fade" mode="out-in">
				<span class="price" :key="current.pricing[2]">{{ current.pricing[2] }}$/2 часа</span>
			</Transition>
			<div class="sep">|</div>
			<Transition name="fade" mode="out-in">
				<span :key="current.pricing.night" class="price">{{ current.pricing.night }}$/ночь</span>
			</Transition>
		</spacer>
		<spacer size="large">
			<v-button class="details">
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
</style>