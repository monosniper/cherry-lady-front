<script setup>

import $config from "@/config.js";
</script>

<template>
	<div class="menu">
		<router-link class="menu__item" to="/terms">
			{{ $t('terms.title') }}
		</router-link>
		<router-link class="menu__item" to="/policy">
			{{ $t('policy.title') }}
		</router-link>
		<a :href="$config.tech" class="menu__item" target="_blank">{{ $t('footer.tech') }}</a>
	</div>
</template>

<style scoped>
	.menu {
		display: flex;
		gap: 30px;
		
		a {
			color: #eee;
			font-size: 14px;
		}
	}
	
	@media screen and (max-width: 1050px) {
		.menu {
			flex-direction: column;
			gap: 20px;
			align-items: center;
		}
	}
</style>