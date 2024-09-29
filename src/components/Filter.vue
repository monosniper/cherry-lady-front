<script setup>
	import FilterStore from '@/stores/filters.js'
	import __ from '@/helpers/translate.js'

	const {
		filters,
		sorts,
		groups,
		services,
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
				:class="`block-${i}`"
				v-for="(property, i) in filters.properties.slice(0, 3)"
			>
				<el-dropdown trigger="click">
					<spacer class="filter__item" :size="5">
						{{ property.name }}:
						<span v-if="property.type === 'range'" class="accent">от {{ property.value[0] }} до {{ property.value[1] }}</span>
						<span v-else class="accent">{{ property.options.find(({id}) => property.value === id).name }}</span>
						<v-icon name="select"></v-icon>
					</spacer>
					<template #dropdown>
						<div class="filter__group" v-if="property.type === 'range'">
							<spacer>
								<input class="filter__field" type="number" v-model="property.value[0]" placeholder="От">
								-
								<input class="filter__field" type="number" v-model="property.value[1]" placeholder="До">
							</spacer>
						</div>
						<el-dropdown-menu v-else>
							<el-dropdown-item
								v-for="option in property.options"
								@click="property.value = option.id"
								:disabled="option.id === property.value"
							>{{ option.name }}</el-dropdown-item>
						</el-dropdown-menu>
					</template>
				</el-dropdown>
			</div>
			<div class="block-4">
				<el-dropdown trigger="click" class="block">
					<spacer class="filter__item" :size="5">
						Сортировка: <span class="accent">{{ filters.sort }}</span>
						<v-icon name="select"></v-icon>
					</spacer>
					<template #dropdown>
						<el-dropdown-menu>
							<el-dropdown-item
								v-for="sort in Object.keys(sorts)"
								@click="filters.sort = sort"
								:disabled="sort === filters.sort"
							>{{ sort }}</el-dropdown-item>
						</el-dropdown-menu>
					</template>
				</el-dropdown>
			</div>
			<div>
				{{ $t('catalogue.found') }}: <span class="accent">128</span>
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
				<el-form-item class="extended__group" label="По тегам">
					<el-select v-model="filters.tags" size="large" placeholder="Выберите теги" multiple>
						<el-option value="1" label="hello"></el-option>
						<el-option value="2" label="hello 2"></el-option>
						<el-option value="3" label="hello 3"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item class="extended__group" label="По языку">
					<el-select v-model="filters.language" size="large" placeholder="Выберите теги">
						<el-option value="1" label="hello"></el-option>
						<el-option value="2" label="hello 2"></el-option>
						<el-option value="3" label="hello 3"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item class="extended__group" label="Сортировка">
					<el-select v-model="filters.sort" size="large" placeholder="Выберите теги">
						<el-option value="1" label="hello"></el-option>
						<el-option value="2" label="hello 2"></el-option>
						<el-option value="3" label="hello 3"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item>
					<el-radio-group v-model="filters.exit" class="radio-group">
						<el-radio :value="true" size="large">Выезжаю</el-radio>
						<el-radio :value="false" size="large">Не выезжаю</el-radio>
					</el-radio-group>
				</el-form-item>
			</div>
			<div class="extended__title">{{ $t('filters.parameters') }}</div>
			<div class="extended__row">
				<el-form-item
					v-for="property in filters.properties"
					class="extended__group"
					:label="property.name"
				>
					<component v-if="property.type === 'range'">
						<el-space spacer="-">
							<el-input type="number" v-model="property.value[0]"></el-input>
							<el-input type="number" v-model="property.value[1]"></el-input>
						</el-space>
						<el-slider v-model="property.value" range />
					</component>
					<el-select
						v-else-if="property.type === 'select'"
					    v-model="filters.tags"
						size="large"
						:placeholder="property.name"
						:multiple="property.multiple"
					>
						<el-option
							v-for="option in property.options"
							:value="option.id"
							:label="option.name"
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
			<component v-for="group in groups">
				<div class="expended__subtitle">{{ __(group.name) }}</div>
				<el-checkbox-group v-model="filters.services" size="large" class="checkbox-group">
					<el-checkbox
						v-for="service in services.filter(({ group_id }) => group_id === group.id)"
						:label="__(service.name)"
						:value="service.id"
					/>
				</el-checkbox-group>
			</component>
			<div class="extended__title">{{ $t('filters.pricing') }}</div>
			<div class="expended__subtitle">Апартаменты</div>
			<div class="extended__row">
				<el-form-item class="extended__group" :label="`${$t('filters.dollars')}/${$t('shared.hours')}`">
					<el-space spacer="-">
						<el-input type="number" v-model="filters.prices.apartments[1][0]"></el-input>
						<el-input type="number" v-model="filters.prices.apartments[1][1]"></el-input>
					</el-space>
					<el-slider  v-model="filters.prices.apartments[1]" range />
				</el-form-item>
				<el-form-item class="extended__group" :label="`${$t('filters.dollars')}/${$t('shared.hours_2')}`">
					<el-space spacer="-">
						<el-input type="number" v-model="filters.prices.apartments[2][0]"></el-input>
						<el-input type="number" v-model="filters.prices.apartments[2][1]"></el-input>
					</el-space>
					<el-slider  v-model="filters.prices.apartments[2]" range />
				</el-form-item>
				<el-form-item class="extended__group" :label="`${$t('filters.dollars')}/${$t('shared.night')}`">
					<el-space spacer="-">
						<el-input type="number" v-model="filters.prices.apartments.night[0]"></el-input>
						<el-input type="number" v-model="filters.prices.apartments.night[1]"></el-input>
					</el-space>
					<el-slider  v-model="filters.prices.apartments.night" range />
				</el-form-item>
			</div>
			<div class="expended__subtitle">Выезд</div>
			<div class="extended__row">
				<el-form-item class="extended__group" :label="`${$t('filters.dollars')}/${$t('shared.hours')}`">
					<el-space spacer="-">
						<el-input type="number" v-model="filters.prices.exit[1][0]"></el-input>
						<el-input type="number" v-model="filters.prices.exit[1][1]"></el-input>
					</el-space>
					<el-slider  v-model="filters.prices.exit[1]" range />
				</el-form-item>
				<el-form-item class="extended__group" :label="`${$t('filters.dollars')}/${$t('shared.hours_2')}`">
					<el-space spacer="-">
						<el-input type="number" v-model="filters.prices.exit[2][0]"></el-input>
						<el-input type="number" v-model="filters.prices.exit[2][1]"></el-input>
					</el-space>
					<el-slider  v-model="filters.prices.exit[2]" range />
				</el-form-item>
				<el-form-item class="extended__group" :label="`${$t('filters.dollars')}/${$t('shared.night')}`">
					<el-space spacer="-">
						<el-input type="number" v-model="filters.prices.exit.night[0]"></el-input>
						<el-input type="number" v-model="filters.prices.exit.night[1]"></el-input>
					</el-space>
					<el-slider  v-model="filters.prices.exit.night" range />
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
			grid-template-columns: repeat(3, 1fr);
			gap: 0 1.5rem;
			align-items: center;
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

@media screen and (max-width: 650px) {
	.extended__row {
		flex-wrap: wrap;
		
		.extended__group {
			flex: none;
			flex-basis: 30%;
		}
	}
}

@media screen and (max-width: 550px) {
	.extended__row {
		.extended__group {
			flex-basis: 45%;
		}
	}
	.checkbox-group {
		grid-template-columns: 1fr 1fr;
	}
}

@media screen and (max-width: 380px) {
	.extended__row {
		.extended__group {
			flex-basis: 100%;
		}
	}
	.checkbox-group {
		grid-template-columns: 1fr;
	}
}
</style>