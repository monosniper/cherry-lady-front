<script setup>
import {RouterView, useRoute} from 'vue-router'
import {onMounted, watch} from "vue";
import {useI18n} from "vue-i18n";

	const route = useRoute()
	const { locale } = useI18n()

	onMounted(() => {
		document.addEventListener('gesturestart', function (e) {
			e.preventDefault();
		});
		
		if(window.Telegram) {
			window.Telegram.WebApp.expand()
		}
	})

	watch(() => route.query.lang, lang => {
		if(lang === 'en' || lang === 'ru' || lang === 'ar') {
			locale.value = lang
		}
		// if (lang === 'ar') {
		// 	document.documentElement.setAttribute('dir', 'rtl');
		// } else {
		// 	document.documentElement.setAttribute('dir', 'ltr');
		// }
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
	transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
