<script setup>
	import FilterStore from '@/stores/filters.js'

	const {
		filters,
		hair_colors,
		sorts,
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
			<div class="block-1">
				<el-dropdown trigger="click">
					<spacer class="filter__item" :size="5">
						Рост: <span class="accent">от {{ filters.height[0] }} до {{ filters.height[1] }}</span>
						<v-icon name="select"></v-icon>
					</spacer>
					<template #dropdown>
						<div class="filter__group">
							<spacer>
								<input class="filter__field" type="number" v-model="filters.height[0]" placeholder="От">
								<input class="filter__field" type="number" v-model="filters.height[1]" placeholder="До">
							</spacer>
						</div>
					</template>
				</el-dropdown>
			</div>
			
			<div class="block-2">
				<el-dropdown trigger="click" class="block">
					<spacer class="filter__item" :size="5">
						Вес: <span class="accent">от {{ filters.weight[0] }}кг до {{ filters.weight[1] }}кг</span>
						<v-icon name="select"></v-icon>
					</spacer>
					<template #dropdown>
						<div class="filter__group">
							<spacer>
								<input class="filter__field" type="number" v-model="filters.weight[0]" placeholder="От">
								<input class="filter__field" type="number" v-model="filters.weight[1]" placeholder="До">
							</spacer>
						</div>
					</template>
				</el-dropdown>
			</div>
			<div class="block-3">
				<el-dropdown trigger="click" class="block">
					<spacer class="filter__item" :size="5">
						Цвет волос: <span class="accent">{{ filters.hair }}</span>
						<v-icon name="select"></v-icon>
					</spacer>
					<template #dropdown>
						<el-dropdown-menu>
							<el-dropdown-item
								v-for="color in hair_colors"
								@click="filters.hair = color"
								:disabled="color === filters.hair"
							>{{ color }}</el-dropdown-item>
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
								v-for="sort in sorts"
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
				<el-form-item class="extended__group" label="Возраст, лет">
					<el-space spacer="-">
						<el-input type="number" v-model="filters.age[0]"></el-input>
						<el-input type="number" v-model="filters.age[1]"></el-input>
					</el-space>
					<el-slider  v-model="filters.age" range />
				</el-form-item>
				<el-form-item class="extended__group" label="Рост, см">
					<el-space spacer="-">
						<el-input type="number" v-model="filters.height[0]"></el-input>
						<el-input type="number" v-model="filters.height[1]"></el-input>
					</el-space>
					<el-slider  v-model="filters.height" range />
				</el-form-item>
				<el-form-item class="extended__group" label="Вес, кг">
					<el-space spacer="-">
						<el-input type="number" v-model="filters.weight[0]"></el-input>
						<el-input type="number" v-model="filters.weight[1]"></el-input>
					</el-space>
					<el-slider  v-model="filters.weight" range />
				</el-form-item>
			</div>
			<div class="extended__row">
				<el-form-item class="extended__group" label="Возраст, лет">
					<el-space spacer="-">
						<el-input type="number" v-model="filters.age[0]"></el-input>
						<el-input type="number" v-model="filters.age[1]"></el-input>
					</el-space>
					<el-slider  v-model="filters.age" range />
				</el-form-item>
				<el-form-item class="extended__group" label="Рост, см">
					<el-space spacer="-">
						<el-input type="number" v-model="filters.height[0]"></el-input>
						<el-input type="number" v-model="filters.height[1]"></el-input>
					</el-space>
					<el-slider  v-model="filters.height" range />
				</el-form-item>
				<el-form-item class="extended__group" label="Вес, кг">
					<el-space spacer="-">
						<el-input type="number" v-model="filters.weight[0]"></el-input>
						<el-input type="number" v-model="filters.weight[1]"></el-input>
					</el-space>
					<el-slider  v-model="filters.weight" range />
				</el-form-item>
			</div>
			<div class="extended__title">{{ $t('filters.services') }}</div>
			<div class="expended__subtitle">Секс</div>
			<el-checkbox-group v-model="filters.tags" size="large" class="checkbox-group">
				<el-checkbox label="Минет без резинки" value="8" />
				<el-checkbox label="Минет горловой" value="9" />
				<el-checkbox label="Минет в машине" value="10" />
				<el-checkbox label="Целуюсь" value="11" />
				<el-checkbox label="Игрушки" value="12" />
				<el-checkbox label="Окончание на грудь" value="13" />
				<el-checkbox label="Окончание на лицо" value="14" />
				<el-checkbox label="Окончание в рот" value="15" />
				<el-checkbox label="Поза 69" value="16" />
			</el-checkbox-group>
			<div class="expended__subtitle">Массаж</div>
			<el-checkbox-group v-model="filters.tags" size="large" class="checkbox-group">
				<el-checkbox label="Целуюсь" value="11" />
				<el-checkbox label="Игрушки" value="12" />
				<el-checkbox label="Окончание на грудь" value="13" />
				<el-checkbox label="Окончание на лицо" value="14" />
				<el-checkbox label="Окончание в рот" value="15" />
				<el-checkbox label="Поза 69" value="16" />
			</el-checkbox-group>
			<div class="expended__subtitle">Стриптиз</div>
			<el-checkbox-group v-model="filters.tags" size="large" class="checkbox-group">
				<el-checkbox label="Секс классический" value="1" />
				<el-checkbox label="Секс анальный" value="2" />
				<el-checkbox label="Секс групповой" value="3" />
				<el-checkbox label="Секс лесбийский" value="4" />
				<el-checkbox label="Семейной паре" value="5" />
				<el-checkbox label="Куннилингус" value="6" />
				<el-checkbox label="Минет в резинке" value="7" />
				<el-checkbox label="Минет без резинки" value="8" />
				<el-checkbox label="Минет горловой" value="9" />
				<el-checkbox label="Минет в машине" value="10" />
				<el-checkbox label="Целуюсь" value="11" />
				<el-checkbox label="Игрушки" value="12" />
				<el-checkbox label="Окончание на грудь" value="13" />
			</el-checkbox-group>
			<div class="expended__subtitle">Садо-мазо</div>
			<el-checkbox-group v-model="filters.tags" size="large" class="checkbox-group">
				<el-checkbox label="Секс классический" value="1" />
				<el-checkbox label="Секс анальный" value="2" />
				<el-checkbox label="Секс групповой" value="3" />
				<el-checkbox label="Секс лесбийский" value="4" />
				<el-checkbox label="Семейной паре" value="5" />
				<el-checkbox label="Куннилингус" value="6" />
				<el-checkbox label="Минет в резинке" value="7" />
				<el-checkbox label="Минет без резинки" value="8" />
				<el-checkbox label="Минет горловой" value="9" />
				<el-checkbox label="Минет в машине" value="10" />
				<el-checkbox label="Целуюсь" value="11" />
				<el-checkbox label="Игрушки" value="12" />
				<el-checkbox label="Окончание на грудь" value="13" />
				<el-checkbox label="Окончание на лицо" value="14" />
				<el-checkbox label="Окончание в рот" value="15" />
				<el-checkbox label="Поза 69" value="16" />
			</el-checkbox-group>
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
			display: flex;
			gap: 1.5rem;
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