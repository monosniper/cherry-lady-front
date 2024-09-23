<script setup>
	import { RouterView } from 'vue-router'
	import {onMounted} from "vue";
	
	onMounted(() => {
		document.addEventListener('gesturestart', function (e) {
			e.preventDefault();
		});
	})
</script>

<template>
	<Main>
		<RouterView />
	</Main>
</template>

<style scoped>

</style>
