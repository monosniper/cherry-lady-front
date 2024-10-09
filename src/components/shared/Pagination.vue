<script setup>
import {computed, ref, watch} from "vue";
import LeftIcon from '@/assets/icons/left.svg?raw'
import RightIcon from '@/assets/icons/right.svg?raw'
	
	const props = defineProps({
		total: Number,
		loop: {
			type: Boolean,
			default: true
		},
	})
	
	const emit = defineEmits(["prev", 'next', 'change']);
	
	const current = ref(1)
	const format_current = computed(() => current.value < 10 ? `0${current.value}` : current.value)
	const format_total = props.total < 10 ? `0${props.total}` : props.total

	watch(current, (value) => {
		emit('change', value)
	})

	const prev = () => {
		if(!props.loop) {
			if(current.value === 1) return
		}
		current.value = current.value === 1 ? props.total : current.value - 1
		emit('prev')
	}
	
	const next = () => {
		if(!props.loop) {
			if(current.value === props.total) return
		}
		current.value = current.value === props.total ?  1 : current.value + 1
		emit('next')
	}
	
	const goTo = (page) => current.value = page

	defineExpose({ goTo, current })
</script>

<template>
	<div class="pagination">
		<v-icon @click="prev" class="arrow arrow--prev" svg :name="LeftIcon"></v-icon>
		<div class="pagination__item">
			<div class="pagination__current">{{ format_current }}</div>
			<div class="pagination__total">{{ format_total }}</div>
		</div>
		<v-icon @click="next" class="arrow arrow--next" svg :name="RightIcon"></v-icon>
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