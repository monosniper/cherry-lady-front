<script setup>
import ModelsStore from "@/stores/models.js";

const modelsStore = ModelsStore
const { data: models } = modelsStore
</script>

<template>
	<div class="models">
		<model
			v-for="model in models"
			v-bind="model"
		></model>
	</div>
</template>

<style scoped>
	.models {
		margin: 2rem 0;
		display: grid;
		gap: 2rem 1rem;
		grid-template-columns: repeat(4, 1fr);
	}
	
	@media screen and (max-width: 1200px) {
		.models {
			grid-template-columns: repeat(3, 1fr);
		}
	}
	
	@media screen and (max-width: 900px) {
		.models {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media screen and (max-width: 600px) {
		.models {
			justify-content: center;
			grid-template-columns: 300px;
		}
	}
</style>