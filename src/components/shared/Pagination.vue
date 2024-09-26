<script setup>
import {computed, ref, watch} from "vue";
	
	const props = defineProps({
		total: Number,
	})
	
	const emit = defineEmits(["prev", 'next', 'change']);
	
	const current = ref(1)
	const format_current = computed(() => current.value < 10 ? `0${current.value}` : current.value)
	const format_total = props.total < 10 ? `0${props.total}` : props.total

	watch(current, (value) => {
		emit('change', value)
	})

	const prev = () => {
		current.value = current.value === 1 ? props.total : current.value - 1
		emit('prev')
	}
	
	const next = () => {
		current.value = current.value === props.total ?  1 : current.value + 1
		emit('next')
	}
	
	const goTo = (page) => current.value = page

	defineExpose({goTo})
</script>

<template>
	<div class="pagination">
		<v-icon @click="prev" class="arrow arrow--prev" name="left"></v-icon>
		<div class="pagination__item">
			<div class="pagination__current">{{ format_current }}</div>
			<div class="pagination__total">{{ format_total }}</div>
		</div>
		<v-icon @click="next" class="arrow arrow--next" name="right"></v-icon>
	</div>
</template>

<style scoped>
	.pagination {
		display: flex;
		gap: 2rem;
		justify-content: center;
		font-family: Montserrat, sans-serif;
		align-items: center;
		color: var(--color-dark);
		
		.arrow {
			cursor: pointer;
			transition: .1s ease-in-out;
		}
		
		.arrow--prev:hover {
			transform: translateX(-5px);
		}
		
		.arrow--next:hover {
			transform: translateX(5px);
		}
		
		.pagination__current {
			font-size: 32px;
			font-weight: 600;
			position: relative;
			
		}
		
		.pagination__total {
			font-size: 20px;
			color: #777;
			transform: translateY(15px);
		}
		
		.pagination__total::before {
			content: '/';
		}
		
		.pagination__item {
			display: flex;
		}
	}
</style>