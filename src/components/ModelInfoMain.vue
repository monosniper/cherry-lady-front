<script setup>
	import {splitArray} from "@/helpers/splitArray.js";
	
	const props = defineProps({
		model: Object
	})

	const properties_split = splitArray(props.model.properties)
</script>

<template>
	<div class="container">
		<model-info :data="model" class="model-info-main">
			<template #third>
				<icon-label icon="languages">
					<span :key="model.languages">{{ model.languages }}</span>
				</icon-label>
			</template>
			<template #details><span></span></template>
			<template #properties>
				<properties :data="properties_split[0]" style="margin-bottom: 20px;"></properties>
				<properties :data="properties_split[1]" style="margin-bottom: 20px;"></properties>
			</template>
		</model-info>
	</div>
</template>

<style>
	.model-info-main {
		margin: 3rem 0;
		text-align: center;
		
		.model-name {
			justify-content: center;
		}
		
		.tags {
			justify-content: center;
		}
		
		.model-info__icons {
			justify-content: center;
			gap: 1rem 5rem;
			margin: 2rem 0;
		}
		
		.model-info__footer {
			justify-content: center;
		}
		
		.model-info__properties {
			display: flex;
			gap: 2rem;
			
			.properties {
				flex: 1;
			}
		}
	}
	
	@media screen and (max-width: 750px) {
		.model-info__properties {
			flex-direction: column;
			gap: 0 !important;
			margin-bottom: 2rem;
			
			.properties {
				margin: 0 !important;
			}
		}
	}
</style>