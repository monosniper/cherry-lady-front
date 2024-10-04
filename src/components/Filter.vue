<script setup>
	import FilterStore from '@/stores/filters.js'
	import ModelsStore from '@/stores/models.js'
	import __ from '@/helpers/translate.js'
	
	defineProps({
		total: Number
	})

	const {
		filters,
		sorts,
		groups,
		tags,
		services,
		languages,
		properties,
	} = FilterStore
</script>

<template>
	<div class="filter">
		<spacer class="between">
			<v-button :round="false" size="small" @click="filters.extend = true">
				<icon-label icon="filter">
					<div class="long">{{ $t("catalogue.extended_filter") }}</div>
					<div class="short">{{ $t("catalogue.filter") }}</div>
				</icon-label>
			</v-button>
			<div
				:class="`block-${i+1}`"
				v-for="(property, i) in filters.properties.filter(({ multiple }) => !multiple).slice(0, 3)"
			>
				<el-dropdown trigger="click">
					<spacer class="filter__item" :size="5">
						{{ __(property.name) }}:
						<span v-if="property.value && property.type === 'range'" class="accent">{{ $t('filters.from') }} {{ property.value[0] }} {{ $t('filters.to') }} {{ property.value[1] }}</span>
						<span v-else class="accent">{{ __(property.options.find(({id}) => property.value === id)?.name) ?? $t('filters.all') }}</span>
						<v-icon name="select"></v-icon>
					</spacer>
					<template #dropdown>
						<div class="filter__group" v-if="property.type === 'range'">
							<spacer>
								<input class="filter__field" type="number" v-model="property.value[0]" :placeholder="$t('filters.from')">
								-
								<input class="filter__field" type="number" v-model="property.value[1]" :placeholder="$t('filters.to')">
							</spacer>
						</div>
						<el-dropdown-menu v-else>
							<el-dropdown-item
								v-for="option in property.options"
								@click="property.value = option.id"
								:disabled="option.id === property.value"
							>{{ __(option.name) }}</el-dropdown-item>
						</el-dropdown-menu>
					</template>
				</el-dropdown>
			</div>
			<div class="block-4">
				<el-dropdown trigger="click" class="block">
					<spacer class="filter__item" :size="5">
						{{ $t('filters.sort') }}: <span class="accent">{{ $t('filters.sorts.'+filters.sort) }}</span>
						<v-icon name="select"></v-icon>
					</spacer>
					<template #dropdown>
						<el-dropdown-menu>
							<el-dropdown-item
								v-for="sort in Object.keys(sorts)"
								@click="filters.sort = sort"
								:disabled="sort === filters.sort"
							>{{ $t('filters.sorts.'+sort) }}</el-dropdown-item>
						</el-dropdown-menu>
					</template>
				</el-dropdown>
			</div>
			<div>
				{{ $t('catalogue.found') }}: <span class="accent">{{ total }}</span>
			</div>
		</spacer>
	</div>
	
	<el-drawer
		v-model="filters.extend"
		direction="rtl"
		:with-header="false"
		class="extended-wrapper"
	>
		<el-form label-position="top" size="large" class="extended">
			<div class="extended__title">{{ $t('filters.main') }}</div>
			<div class="extended__row">
				<el-form-item class="extended__group" :label="$t('filters.by_tags')">
					<el-select v-model="filters.tags" size="large" :placeholder="$t('filters.by_tags')" multiple>
						<el-option
							v-for="tag in tags"
							:value="tag.id"
							:label="__(tag.name)"
						></el-option>
					</el-select>
				</el-form-item>
				<el-form-item class="extended__group" :label="$t('filters.by_language')">
					<el-select v-model="filters.language" size="large" :placeholder="$t('filters.by_language')">
						<el-option
							v-for="language in languages"
							:value="language.id"
							:label="__(language.name)"
						></el-option>
					</el-select>
				</el-form-item>
				<el-form-item class="extended__group" :label="$t('filters.sort')">
					<el-select v-model="filters.sort" size="large">
						<el-option
							v-for="sort in Object.keys(sorts)"
							:value="sort"
							:label="$t('filters.sorts.'+sort)"
						></el-option>
					</el-select>
				</el-form-item>
				<el-form-item>
					<el-radio-group v-model="filters.exit" class="radio-group">
						<el-radio :value="true" size="large">{{ $t('filters.exit') }}</el-radio>
						<el-radio :value="false" size="large">{{ $t('filters.apartments') }}</el-radio>
					</el-radio-group>
				</el-form-item>
			</div>
			<div class="extended__title">{{ $t('filters.parameters') }}</div>
			<div class="extended__row">
				<el-form-item
					v-for="property in filters.properties"
					class="extended__group"
					:label="__(property.name)"
				>
					<div v-if="property.type === 'range'">
						<el-space spacer="-">
							<el-input type="number" v-model="property.value[0]"></el-input>
							<el-input type="number" v-model="property.value[1]"></el-input>
						</el-space>
						<el-slider :min="property.min" :max="property.max" v-model="property.value" range />
					</div>
					<el-select
						v-else-if="property.type === 'select'"
					    v-model="property.value"
						size="large"
						:placeholder="__(property.name)"
						:multiple="property.multiple"
					>
						<el-option
							v-for="option in property.options"
							:value="option.id"
							:label="__(option.name)"
						></el-option>
					</el-select>
					<el-radio-group
						v-else-if="property.type === 'radio'"
						v-model="property.value"
						class="radio-group"
					>
						<el-radio
							v-for="option in property.options"
							:value="option.id"
							size="large"
						>{{ __(option.name) }}</el-radio>
					</el-radio-group>
				</el-form-item>
			</div>
			<div class="extended__title">{{ $t('filters.services') }}</div>
			<div v-for="group in groups">
				<div class="expended__subtitle">{{ __(group.name) }}</div>
				<el-checkbox-group v-model="filters.services" size="large" class="checkbox-group">
					<el-checkbox
						v-for="service in services.filter(({ group_id }) => group_id === group.id)"
						:label="__(service.name)"
						:value="service.id"
					/>
				</el-checkbox-group>
			</div>
			<div class="extended__title">{{ $t('filters.pricing') }}</div>
			<div class="expended__subtitle">{{ $t('filters.price_apartments') }}</div>
			<div class="extended__row">
				<el-form-item class="extended__group" :label="`${$t('filters.dollars')}/${$t('shared.hours')}`">
					<el-space spacer="-">
						<el-input type="number" v-model="filters.prices.apartments['1 Час'][0]"></el-input>
						<el-input type="number" v-model="filters.prices.apartments['1 Час'][1]"></el-input>
					</el-space>
					<el-slider
						:min="ModelsStore.pricingDefaults.value.apartments['1 Час'].min"
						:max="ModelsStore.pricingDefaults.value.apartments['1 Час'].max"
						v-model="filters.prices.apartments['1 Час']"
						range
					/>
				</el-form-item>
				<el-form-item class="extended__group" :label="`${$t('filters.dollars')}/${$t('shared.hours_2')}`">
					<el-space spacer="-">
						<el-input type="number" v-model="filters.prices.apartments['2 Часа'][0]"></el-input>
						<el-input type="number" v-model="filters.prices.apartments['2 Часа'][1]"></el-input>
					</el-space>
					<el-slider
						:min="ModelsStore.pricingDefaults.value.apartments['2 Часа'].min"
						:max="ModelsStore.pricingDefaults.value.apartments['2 Часа'].max"
						v-model="filters.prices.apartments['2 Часа']"
						range
					/>
				</el-form-item>
				<el-form-item class="extended__group" :label="`${$t('filters.dollars')}/${$t('shared.night')}`">
					<el-space spacer="-">
						<el-input type="number" v-model="filters.prices.apartments['Ночь'][0]"></el-input>
						<el-input type="number" v-model="filters.prices.apartments['Ночь'][1]"></el-input>
					</el-space>
					<el-slider
						:min="ModelsStore.pricingDefaults.value.apartments['Ночь'].min"
						:max="ModelsStore.pricingDefaults.value.apartments['Ночь'].max"
						v-model="filters.prices.apartments['Ночь']"
						range
					/>
				</el-form-item>
			</div>
			<div class="expended__subtitle">{{ $t('filters.price_exit') }}</div>
			<div class="extended__row">
				<el-form-item class="extended__group" :label="`${$t('filters.dollars')}/${$t('shared.hours')}`">
					<el-space spacer="-">
						<el-input type="number" v-model="filters.prices.exit['1 Час'][0]"></el-input>
						<el-input type="number" v-model="filters.prices.exit['1 Час'][1]"></el-input>
					</el-space>
					<el-slider
						:min="ModelsStore.pricingDefaults.value.exit['1 Час'].min"
						:max="ModelsStore.pricingDefaults.value.exit['1 Час'].max"
						v-model="filters.prices.exit['1 Час']"
						range
					/>
				</el-form-item>
				<el-form-item class="extended__group" :label="`${$t('filters.dollars')}/${$t('shared.hours_2')}`">
					<el-space spacer="-">
						<el-input type="number" v-model="filters.prices.exit['2 Часа'][0]"></el-input>
						<el-input type="number" v-model="filters.prices.exit['2 Часа'][1]"></el-input>
					</el-space>
					<el-slider
						:min="ModelsStore.pricingDefaults.value.exit['2 Часа'].min"
						:max="ModelsStore.pricingDefaults.value.exit['2 Часа'].max"
						v-model="filters.prices.exit['2 Часа']"
						range
					/>
				</el-form-item>
				<el-form-item class="extended__group" :label="`${$t('filters.dollars')}/${$t('shared.night')}`">
					<el-space spacer="-">
						<el-input type="number" v-model="filters.prices.exit['Ночь'][0]"></el-input>
						<el-input type="number" v-model="filters.prices.exit['Ночь'][1]"></el-input>
					</el-space>
					<el-slider
						:min="ModelsStore.pricingDefaults.value.exit['Ночь'].min"
						:max="ModelsStore.pricingDefaults.value.exit['Ночь'].max"
						v-model="filters.prices.exit['Ночь']"
						range
					/>
				</el-form-item>
			</div>
		</el-form>
		<div class="center">
			<el-space size="large">
				<v-button class="filter__button filter__button--outline" @click="filters.extend = false">{{ $t('shared.cancel') }}</v-button>
				<v-button class="filter__button" @click="filters.extend = false">{{ $t('shared.search') }}</v-button>
			</el-space>
		</div>
	</el-drawer>
</template>

<style scoped>
	.filter__button--outline {
		background: #fff;
		color: var(--color-dark);
		font-size: 14px;
	}
	
	.filter__button--outline:hover {
		background: #f5f5f5;
	}
	
	.filter__button {
		padding: 15px 40px;
	}
	
	.extended__title {
		font-size: 20px;
		font-weight: 600;
		margin-bottom: 1rem;
	}

	.filter {
		padding: 15px 30px;
		border: 1px solid var(--color-accent);
		border-radius: 15px;
		
		.filter__item {
			font-weight: 600;
			font-size: 16px;
			cursor: pointer;
		}
	}
	
	.radio-group {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}
	
	.extended {
		.extended__row {
			display: grid;
			align-items: flex-start;
			grid-template-columns: repeat(3, 1fr);
			gap: 0 1.5rem;
		}
		.extended__group {
			flex: 1;
		}
	}
	
	.checkbox-group {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		margin-bottom: 1rem;
	}
	
	.short {
		display: none;
	}
	
	@media screen and (max-width: 1440px) {
		.block-1 {
			display: none !important;
		}
	}
	
	@media screen and (max-width: 1150px) {
		.block-2 {
			display: none !important;
		}
	}
	
	@media screen and (max-width: 950px) {
		.block-3 {
			display: none !important;
		}
	}
	
	@media screen and (max-width: 780px) {
		.block-4 {
			display: none !important;
		}
		
		.short {
			display: block;
		}
		.long {
			display: none;
		}
	}

@media screen and (max-width: 550px) {
	.extended .extended__row {
		grid-template-columns: repeat(2, 1fr);
	}
	.checkbox-group {
		grid-template-columns: 1fr 1fr;
	}
}

@media screen and (max-width: 380px) {
	.extended .extended__row {
		grid-template-columns: 1fr;
	}
	.checkbox-group {
		grid-template-columns: 1fr;
	}
}
</style>