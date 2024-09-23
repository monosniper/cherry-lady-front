<script setup>
	defineProps({
		data: Array
	})
</script>

<template>
	<div class="tags">
		<TransitionGroup name="list">
			<div class="tag" :key="item" v-for="item in data">{{ item }}</div>
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
}
.fade-in-enter-active {
	transition: 300ms cubic-bezier(0.55, 0.085, 0.68, 0.53);
}

.fade-in-leave-active {
	transition: 225ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.fade-in-enter,
.fade-in-leave-to {
	opacity: 0;
}
</style>