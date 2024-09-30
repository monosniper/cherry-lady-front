<script setup>

import $config from "@/config.js";
</script>

<template>
	<header>
		<div class="container">
			<div class="between">
				<logo></logo>
				<spacer>
					<a :href="$config.chat" target="_blank">
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