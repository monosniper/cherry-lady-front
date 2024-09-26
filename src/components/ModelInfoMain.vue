<script setup>
	defineProps({
		model: Object
	})
</script>

<template>
	<div class="container">
		<model-info class="model-info-main">
			<template #third>
				<icon-label icon="lang">
					<Transition name="fade" mode="out-in">
						<span :key="model?.id">{{ model?.id }} года</span>
					</Transition>
				</icon-label>
			</template>
		</model-info>
	</div>
</template>

<style>
	.model-info-main {
		margin-top: 3rem;
		text-align: center;
		
		.model-name {
			justify-content: center;
		}
		
		.tags {
			justify-content: center;
		}
	}
</style>