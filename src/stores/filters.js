import {reactive, ref} from "vue";
import {sortPrices} from "@/helpers/sortPrices.js";
import $api from "@/api/index.js";
import {raw} from "@/helpers/raw.js";

class FilterStore {
	constructor() {
		this.extend = ref(false);
		
		this.default = {
			test: null,
			properties: [],
			sort: 'new',
			tags: [],
			services: [],
			language: null,
			exit: 'all',
			prices: {
				apartments: {
					'1 Час': [30, 100],
					'2 Часа': [30, 100],
					'Ночь': [30, 100],
				},
				exit: {
					'1 Час': [30, 100],
					'2 Часа': [30, 100],
					'Ночь': [30, 100],
				},
			},
		}
		
		this.filters = reactive(raw(this.default))
		
		this.tags = ref([])
		this.properties = ref([])
		this.services = ref([])
		this.groups = ref([])
		this.languages = ref([])
		
		this.sorts = {
			new: (data) => data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)),
			popular: (data) => data.sort((a, b) => b.views - a.views),
			reviews: (data) => data.filter(item => item.reviews.length > 0),
			cheap: (data) => sortPrices(data, this.filters.exit, true),
			expensive: (data) => sortPrices(data, this.filters.exit, false),
		}
		
		this.fetch().then(() => {
			const properties = this.properties.value.map(property => {
				return {
					...property,
					value: property.type === 'range' ? [property.min, property.max] : null
				}
			})
			
			this.filters.properties = properties
			this.default.properties = properties
		})
	}
	
	async fetch() {
		this.tags.value = await $api.get('tags').then(({data}) => data)
		this.properties.value = await $api.get('properties').then(({data}) => data)
		this.services.value = await $api.get('services').then(({data}) => data)
		this.groups.value = await $api.get('groups').then(({data}) => data)
		this.languages.value = await $api.get('languages').then(({data}) => data)
	}
	
	reset() {
		Object.assign(this.filters, raw(this.default))
	}
}

export default new FilterStore()