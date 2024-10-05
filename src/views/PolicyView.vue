<script setup>
import SettingStore from '@/stores/settings.js'
import __ from "@/helpers/translate.js";

const { data: settings } = SettingStore
</script>

<template>
	<div class="container">
		<h1>{{ $t('policy.title') }}</h1>
		<p style="margin-bottom: 3rem;" v-html="__(settings.policy)"></p>
	</div>
</template>

<style scoped>

</style>