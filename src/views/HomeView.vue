<script setup>
	import ModelsStore from "@/stores/models.js";
	
	const { current, data } = ModelsStore
</script>

<template>
	<div class="container sides" style="margin-bottom: 45px;">
		<div class="side">
			<div class="center">
				<type-switch></type-switch>
			</div>
			<swiper :data="data"></swiper>
		</div>
		<div class="side flex align-center">
			<model-info limit="6" :data="current"></model-info>
		</div>
	</div>
</template>

<style scoped>
	.sides {
		display: grid;
		align-items: center;
		height: 100%;
		gap: 60px;
		grid-template-columns: 5fr 4fr;
	}
	
	.side {
		width: 100%;
	}
	
	.center {
		margin-bottom: 30px;
	}
	
	@media screen and (max-width: 1200px) {
		.sides {
			grid-template-columns: 1fr 1fr;
		}
	}
	
	@media screen and (max-width: 950px) {
		.sides {
			display: flex;
			flex-direction: column;
			gap: 0;
		}
		
		.side:last-child {
			max-width: 100%;
			margin: 0 auto;
		}
	}
	
	@media screen and (max-width: 500px) {
		.center {
			margin-bottom: 0;
		}
	}
</style>