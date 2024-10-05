<script setup>
import {VueFinalModal} from "vue-final-modal";
import DialogService, {DIALOGS} from "@/services/DialogService.js";
import {ref} from "vue";
import $api from "@/api/index.js";
import {validateEmail} from "@/helpers/validateEmail.js";
import {isValidNumberString} from "@/helpers/isValidNumberString.js";

const modalName = DIALOGS.BLANK
const validation = ref({
	name: true,
	phone: true,
	email: true,
	telegram: true,
	whatsapp: true,
})
const name = ref('')
const phone = ref('')
const email = ref('')
const telegram = ref('')
const whatsapp = ref('')

const validate = () => {
	validation.value.name = name.value.trim() !== ''
	validation.value.phone = phone.value.trim() !== '' && phone.value.trim().length >= 11 && phone.value.trim().length <= 16 && isValidNumberString(phone.value.trim())
	validation.value.email = email.value.trim() !== '' && validateEmail(email.value)
	validation.value.telegram = telegram.value.trim() !== ''
	validation.value.whatsapp = whatsapp.value.trim() !== '' && whatsapp.value.trim().length >= 11 && whatsapp.value.trim().length <= 16 && isValidNumberString(whatsapp.value.trim())

	return Object.values(validation.value).filter(v => !!v).length === 5
}

const handleClick = () => {
	if(validate()) {
		DialogService.close(modalName)
		DialogService.open(DIALOGS.THANKS)
		
		$api.post('apply', {
			name: name.value,
			phone: phone.value,
			email: email.value,
			tg: telegram.value,
			wp: whatsapp.value,
		})
		
		name.value = ''
		phone.value = ''
		email.value = ''
		telegram.value = ''
		whatsapp.value = ''
	}
}
</script>

<template>
	<VueFinalModal
		v-model="DialogService.dialogs[modalName]"
		class="flex center align-center"
		overlay-transition="vfm-fade"
		content-transition="vfm-slide-down"
		content-class="modal__content"
	>
		<div class="modal__close" @click="DialogService.close(modalName)">
			<v-icon name="times"></v-icon>
		</div>
		
		<div class="modal__title">{{ $t('blank.title') }}</div>
		<div class="modal__subtitle">{{ $t('blank.subtitle') }}</div>
		
		<div class="modal__form">
			<spacer class="modal__row">
				<div class="modal__group">
					<label for="name" class="modal__label">{{ $t('blank.form.name.label') }}</label>
					<input v-model="name" :class="{modal__field: true, 'modal__field--error': !validation.name}" id="name" type="text" :placeholder="$t('blank.form.name.placeholder')" />
				</div>
				<div class="modal__group">
					<label for="email" class="modal__label">{{ $t('blank.form.email.label') }}</label>
					<input v-model="email" :class="{modal__field: true, 'modal__field--error': !validation.email}" id="email" type="email" :placeholder="$t('blank.form.name.placeholder')" />
				</div>
			</spacer>
			<spacer class="modal__row">
				<div class="modal__group">
					<label for="phone" class="modal__label">{{ $t('blank.form.phone.label') }}</label>
					<input v-model="phone" :class="{modal__field: true, 'modal__field--error': !validation.phone}" id="phone" type="tel" min="11" max="16" :placeholder="$t('blank.form.phone.placeholder')" />
				</div>
				<div class="modal__group">
					<label for="telegram" class="modal__label">{{ $t('blank.form.telegram.label') }}</label>
					<input v-model="telegram" :class="{modal__field: true, 'modal__field--error': !validation.telegram}" id="telegram" type="text" :placeholder="$t('blank.form.telegram.placeholder')" />
				</div>
			</spacer>
			<spacer class="modal__row">
				<div class="modal__group">
					<label for="whatsapp" class="modal__label">{{ $t('blank.form.whatsapp.label') }}</label>
					<input v-model="whatsapp" :class="{modal__field: true, 'modal__field--error': !validation.whatsapp}" id="whatsapp" type="text" :placeholder="$t('blank.form.whatsapp.placeholder')" />
				</div>
			</spacer>
		</div>
		
		<div class="center">
			<v-button @click="handleClick" class="modal__button">{{ $t('blank.button') }}</v-button>
		</div>
	</VueFinalModal>
</template>

<style scoped>

</style>