<script setup>
	import DialogService, {DIALOGS} from "@/services/DialogService.js";
	import {VueFinalModal} from "vue-final-modal";
	import {onMounted} from "vue";
	import $config from "@/config.js";
	
	const modalName = DIALOGS.NOTIFIER
	
	const close = () => DialogService.close(modalName)
	const open = () => DialogService.open(modalName)
	
	const dontShow = () => {
		close()
	}
	
	const later = () => {
		close()
		
		setTimeout(open, 300000)
	}
	
	onMounted(() => setTimeout(open, 3000))
</script>

<template>
	<VueFinalModal
		v-model="DialogService.dialogs[modalName]"
		class="flex center align-center"
		overlay-transition="vfm-fade"
		content-transition="vfm-slide-down"
		content-class="modal__content"
	>
		<div class="modal__close" @click="close">
			<v-icon name="times"></v-icon>
		</div>
		
		<div class="modal__title">{{ $t('link.title') }}</div>
		
		<i18n-t keypath="link.subtitle" tag="div" class="modal__subtitle" style="margin-bottom: .8rem;">
			<span class="accent">{{ $t('link.accent') }}</span>
		</i18n-t>
		<i18n-t keypath="link.subtitle_2" tag="div" class="modal__subtitle">
			<span class="accent">{{ $t('link.accent_2') }}</span>
		</i18n-t>
		
		<el-space :size="30" class="center wrap" style="row-gap: 1rem">
			<a :href="$config.subscribe" target="_blank">
				<v-button icon="tg" reverse @click="close" class="modal__button">{{ $t('link.subscribe') }}</v-button>
			</a>
			<el-button class="modal-link" @click="later"  type="text">{{ $t('link.later') }}</el-button>
			<el-button class="modal-link" @click="dontShow" type="text">{{ $t('link.dont_show') }}</el-button>
		</el-space>
	</VueFinalModal>
</template>

<style scoped>
	.modal-link {
		box-shadow: none;
		text-transform: uppercase;
		font-size: 15px;
	}
	
	.modal-link:hover {
		color: #f583a1 !important;
	}
	
	.center {
		width: 100%;
	}
	
	.modal__title {
		margin-bottom: 1rem;
	}
</style>