<script setup>

import SettingStore from '@/stores/settings.js'

const { data: settings } = SettingStore
</script>

<template>
	<header>
		<div class="container">
			<div class="between">
				<logo></logo>
				<spacer>
					<a :href="settings.chat" target="_blank">
						<v-button icon="tg" :round="false">
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