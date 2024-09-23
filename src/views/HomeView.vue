<script setup>

</script>

<template>
	<div class="container sides" style="margin-bottom: 45px;">
		<div class="side">
			<div class="center" style="margin-bottom: 30px;">
				<type-switch></type-switch>
			</div>
			<swiper></swiper>
		</div>
		<div class="side flex align-center">
			<model-info></model-info>
		</div>
	</div>
</template>

<style scoped>
	.sides {
		display: grid;
		gap: 60px;
		grid-template-columns: 5fr 4fr;
	}
	
	.side {
		width: 100%;
	}
	
	@media screen and (max-width: 1200px) {
		.sides {
			grid-template-columns: 1fr 1fr;
		}
	}
	
	@media screen and (max-width: 950px) {
		.sides {
			gap: 0;
			grid-template-columns: 1fr;
		}
		
		.side:last-child {
			max-width: 100%;
			margin: 0 auto;
		}
	}
</style>