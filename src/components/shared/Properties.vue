<script setup>
	defineProps({
		data: Array,
	})
</script>

<template>
	<div class="properties">
		<TransitionGroup name="list">
			<div class="property"
			     v-for="item in data"
			     :key="item.key"
			>
				<div class="property__item property__key">{{ item.key }}</div>
				<div  :key="item.value" :class="['property__item property__value', {'property__value--accent': !!item.accent}]">{{ item.value }}</div>
			</div>
		</TransitionGroup>
	</div>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
	transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
	opacity: 0;
	transform: translateX(30px);
}
.fade-in-enter-active {
	transition: opacity 300ms cubic-bezier(0.55, 0.085, 0.68, 0.53);
}

.fade-in-leave-active {
	transition: opacity 225ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.fade-in-enter,
.fade-in-leave-to {
	opacity: 0;
}

.property__value--accent {
	text-transform: uppercase;
	color: var(--color-accent);
}
</style>