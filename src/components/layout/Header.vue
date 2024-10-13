<script setup>
import SettingStore from '@/stores/settings.js'
import TgIcon from '@/assets/icons/tg.svg?raw'
import {i18n} from "@/i18n.js";

const { data: settings } = SettingStore
</script>

<template>
	<header>
		<div class="container">
			<div class="between">
				<logo></logo>
				<spacer>
					<a :href="settings.chat[i18n.global.locale]" target="_blank">
						<v-button svg :icon="TgIcon" :round="false">
							{{ $t('header.chat') }}
						</v-button>
					</a>
					
					<language-switch></language-switch>
				</spacer>
			</div>
		</div>
	</header>
</template>

<style scoped>

</style>