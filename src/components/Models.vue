<script setup>
import {onMounted, ref, watch} from "vue";
import {raw} from "@/helpers/raw.js";
import SelectIcon from "@/assets/icons/select.svg?raw";

const props = defineProps({
	data: Array,
})

const pageSize = ref(12)
const isMobile = ref(false)
const total = ref(Math.ceil(props.data.length / pageSize.value))

const paginationRef = ref()

const pageModels = ref(raw(props.data).splice(0, pageSize.value))

const next = () => {
	pageModels.value = raw(props.data).splice((paginationRef.value.current - 1) * pageSize.value, (paginationRef.value.current + 1) * pageSize.value)
	console.log(props.data)
	console.log((paginationRef.value.current - 1) * pageSize.value, (paginationRef.value.current + 1) * pageSize.value)
}
const prev = () => pageModels.value = raw(props.data).splice((paginationRef.value.current - 1) * pageSize.value, paginationRef.value.current * pageSize.value)

onMounted(() => {
	if(window.innerWidth <= 600) {
		isMobile.value = true
		pageSize.value = 5
		pageModels.value = raw(props.data).splice(0, pageSize.value)
	}
})

const more = () => {
	pageSize.value += 5
	pageModels.value = raw(props.data).splice(0, pageSize.value)
}

watch(() => props.data, (value) => {
	pageModels.value = raw(props.data).splice(0, pageSize.value)
	total.value = Math.ceil(props.data.length / pageSize.value)
})

</script>

<template>
	<div class="models">
		<model
			v-for="model in pageModels"
			v-bind="model"
		></model>
	</div>

	<pagination
		v-if="data.length > pageSize"
		:loop="false"
		style="margin-bottom: 50px;margin-top: 60px;"
		@next="next"
		@prev="prev"
		ref="paginationRef"
		:total="total"
	></pagination>
	<div class="center" v-if="isMobile && pageModels.length !== data.length" style="margin-bottom: 50px;">
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