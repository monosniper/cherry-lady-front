<script setup>
	import GroupStore from '@/stores/groups.js'
	import __ from "@/helpers/translate.js";
	import CheckIcon from '@/assets/icons/check.svg?raw'

	defineProps({
		data: Object
	})
	
	const { data: groups } = GroupStore
</script>

<template>
	<section>
		<div class="container">
			<div class="title">{{ $t('model.preferences') }}</div>
			<div v-for="([group_id, services]) in Object.entries(data)" class="group">
				<div class="expended__subtitle">{{ __(groups.find(({ id }) => id.toString() === group_id.toString())?.name) }}</div>
				<div class="preferences">
					<div class="preference" v-for="service in services">
						<div class="preference__icon">
							<v-icon svg :name="CheckIcon"></v-icon>
						</div>
						<div class="preference__body">
							<div class="preference__title">{{ __(service.name) }}</div>
							<div v-if="__(service.comment)?.trim() !== ''" class="preference__comment">{{ __(service.comment) }}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
	section {
		background: var(--color-gray);
		padding: 30px 0;
		margin-bottom: 60px;
	}
	
	.title {
		text-align: center;
		color: var(--color-dark);
		font-size: 40px !important;
		font-weight: bold;
		font-family: Montserrat, sans-serif;
		margin-bottom: 20px;
	}
	
	.expended__subtitle {
		color: var(--color-dark);
	}
	
	.preferences {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
		margin-top: 2rem;
	}
	
	.group:not(:last-child) {
		margin-bottom: 3rem;
	}
	
	.preference {
		display: flex;
		gap: 10px;
		font-size: 14px;
		align-items: center;
		font-family: Inter, sans-serif;
		
		.preference__title {
			font-size: 16px;
			color: var(--color-dark);
		}
		
		.preference__comment {
			color: var(--color-accent);
		}
	}
	
	@media screen and (max-width: 900px) {
		.preferences {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	
	@media screen and (max-width: 560px) {
		.preferences {
			grid-template-columns: 1fr;
		}
	}
</style>