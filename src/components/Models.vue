<script setup>
import ModelsStore from "@/stores/models.js";
import {onMounted, ref} from "vue";
import {raw} from "@/helpers/raw.js";

const modelsStore = ModelsStore
const { data: models } = modelsStore

const pageSize = ref(12)
const isMobile = ref(false)
const total = Math.ceil(models.length / pageSize.value)

const paginationRef = ref()
const pageModels = ref(raw(models).splice(0, pageSize.value))

const next = () => pageModels.value = raw(models).splice((paginationRef.value.current - 1) * pageSize.value, (paginationRef.value.current + 1) * pageSize.value)
const prev = () => pageModels.value = raw(models).splice((paginationRef.value.current - 1) * pageSize.value, paginationRef.value.current * pageSize.value)

onMounted(() => {
	if(window.innerWidth <= 600) {
		isMobile.value = true
		pageSize.value = 5
		pageModels.value = raw(models).splice(0, pageSize.value)
	}
})

const more = () => {
	pageSize.value += 5
	pageModels.value = raw(models).splice(0, pageSize.value)
}

</script>

<template>
	<div class="models">
		<model
			v-for="model in pageModels"
			v-bind="model"
		></model>
	</div>

	<pagination
		v-if="total > pageSize"
		:loop="false"
		style="margin-bottom: 50px;margin-top: 60px;"
		@next="next"
		@prev="prev"
		ref="paginationRef"
		:total="total"
	></pagination>
	<div class="center" v-if="isMobile && pageModels.length !== models.length" style="margin-bottom: 50px;">
		<v-button @click="more" class="more" reverse icon="select">{{ $t('shared.more') }}</v-button>
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
		}
	}
</style>