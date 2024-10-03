<script setup>

import DialogService, {DIALOGS} from "@/services/DialogService.js";

</script>

<template>
	<footer>
		<div class="container">
			<div class="flex between align-center footer__wrapper">
				<logo dark></logo>
				<Menu></Menu>
				<v-button @click="DialogService.open(DIALOGS.BLANK)" icon="blank" dark reverse>{{ $t('footer.apply') }}</v-button>
			</div>
		</div>
	</footer>
</template>

<style scoped>

</style>