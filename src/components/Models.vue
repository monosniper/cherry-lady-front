<script setup>
import {computed, onMounted, ref, watch} from "vue";
import {raw} from "@/helpers/raw.js";
import SelectIcon from "@/assets/icons/select.svg?raw";

const props = defineProps({
	data: Array,
})

const currentModels = ref(raw(props.data))
const pageSize = ref(12)
const isMobile = ref(false)
const total = ref(1)

const paginationRef = ref()

onMounted(() => {
	if(window.innerWidth <= 600) {
		isMobile.value = true
		pageSize.value = 5
	}
})

const more = () => {
	pageSize.value += 5
	currentModels.value = raw(props.data).splice(0, pageSize.value)
}

watch(() => props.data.length, (count) => {
	paginationRef.value.current = 1
	total.value = Math.ceil(count / pageSize.value)
	currentModels.value = raw(props.data).splice((paginationRef.value.current - 1) * pageSize.value, pageSize.value)
})

watch(() => paginationRef.value?.current, (page) => {
	if(page) {
		currentModels.value = raw(props.data).splice((page - 1) * pageSize.value, pageSize.value)
	}
})

</script>

<template>
	<div class="models">
		<model
			v-for="model in currentModels"
			v-bind="model"
		></model>
	</div>

	<pagination
		v-if="!isMobile"
		:loop="false"
		style="margin-bottom: 50px;margin-top: 60px;"
		ref="paginationRef"
		:total="total"
	></pagination>
	<div class="center" v-else style="margin-bottom: 50px;">
		<v-button @click="more" class="more" reverse svg :icon="SelectIcon">{{ $t('shared.more') }}</v-button>
	</div>
</template>

<style scoped>

.more {
	font-size: 14px;
	padding: 20px 70px;
	letter-spacing: 0.13em;
}

.more:hover {
	color: #fff;
}

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
			margin-top: 18px !important;
		}
	}
</style>