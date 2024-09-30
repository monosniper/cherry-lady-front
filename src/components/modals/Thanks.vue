<script setup>
import {VueFinalModal} from "vue-final-modal";
import DialogService, {DIALOGS} from "@/services/DialogService.js";

const name = DIALOGS.THANKS
</script>

<template>
	<VueFinalModal
		v-model="DialogService.dialogs[name]"
		class="flex center align-center"
		overlay-transition="vfm-fade"
		content-transition="vfm-slide-down"
		content-class="modal__content modal__content--min"
	>
		<div class="modal__title" style="margin-bottom: 1rem;">{{ $t('thanks.title') }}</div>
		
		<div class="center">
			<v-button @click="DialogService.close(name)" class="modal__button modal__button--sm">{{ $t('thanks.button') }}</v-button>
		</div>
	</VueFinalModal>
</template>

<style scoped>

</style>