<script setup>

</script>

<template>
	<div class="menu">
		<router-link class="menu__item" to="/">
			{{ $t('terms.title') }}
		</router-link>
		<router-link class="menu__item" to="/">
			{{ $t('policy.title') }}
		</router-link>
		<router-link class="menu__item" to="/">
			{{ $t('footer.tech') }}
		</router-link>
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
</style>