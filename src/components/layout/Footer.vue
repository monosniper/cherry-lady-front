<script setup>

import DialogService, {DIALOGS} from "@/services/DialogService.js";
import BlankIcon from '@/assets/icons/blank.svg?raw'

</script>

<template>
	<footer>
		<div class="container">
			<div class="flex between align-center footer__wrapper">
				<logo dark></logo>
				<Menu></Menu>
				<v-button svg @click="DialogService.open(DIALOGS.BLANK)" :icon="BlankIcon" dark reverse>{{ $t('footer.apply') }}</v-button>
			</div>
		</div>
	</footer>
</template>

<style scoped>

</style>