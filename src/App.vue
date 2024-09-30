<script setup>
import {RouterView} from 'vue-router'
	import { onMounted } from "vue";
	
	onMounted(() => {
		document.addEventListener('gesturestart', function (e) {
			e.preventDefault();
		});
	})
</script>

<template>
	<Main>
		<router-view v-slot="{ Component }">
			<transition name="fade" mode="out-in" @after-leave="$root.$emit('triggerScroll')">
				<component :is="Component" />
			</transition>
		</router-view>
	</Main>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	//position: fixed;
	//inset: 0;
	transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
