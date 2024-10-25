<script setup>
import SettingStore from '@/stores/settings.js'
import TgIcon from '@/assets/icons/tg.svg?raw'
import { useI18n } from 'vue-i18n'
import Categories from "@/components/layout/Categories.vue";
const { t, locale } = useI18n()

const { data: settings } = SettingStore
</script>

<template>
	<header>
		<div class="container">
			<div class="between align-center header__wrapper">
				<logo></logo>
				<Categories></Categories>
				<spacer>
					<a :href="settings.chat[locale]" target="_blank">
						<v-button svg :icon="TgIcon" :round="false">
							{{ t('header.chat') }}
						</v-button>
					</a>
					
					<language-switch></language-switch>
				</spacer>
			</div>
		</div>
	</header>
</template>

<style scoped>
	.header__wrapper {
		gap: 3rem;
	}
</style>