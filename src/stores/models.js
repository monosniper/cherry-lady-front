import {ref} from "vue";
import FilterStore from '@/stores/filters.js'
import $api from "@/api/index.js";
import {calculateMinMax} from "@/helpers/calculateMinMax.js";
import {raw} from "@/helpers/raw.js";

class ModelsStore {
    constructor() {
	this.data = ref([])
	this.current = ref({})
	this.pricingDefaults = ref({
	    exit: {},
	    apartments: {},
	})
	this.fetchModels().then(() => {
	    this.pricingDefaults.value = calculateMinMax(this.data.value)
	    const prices = this.pricingDefaults.value
	    const newPrices = {
		apartments: {
		    '1 Час': [
			prices.apartments['1 Час'].min,
			prices.apartments['1 Час'].max
		    ],
		    '2 Часа': [
			prices.apartments['2 Часа'].min,
			prices.apartments['2 Часа'].max
		    ],
		    'Ночь': [
			prices.apartments['Ночь'].min,
			prices.apartments['Ночь'].max
		    ],
		},
		exit: {
		    '1 Час': [
			prices.exit['1 Час'].min,
			prices.exit['1 Час'].max
		    ],
		    '2 Часа': [
			prices.exit['2 Часа'].min,
			prices.exit['2 Часа'].max
		    ],
		    'Ночь': [
			prices.exit['Ночь'].min,
			prices.exit['Ночь'].max
		    ],
		},
	    }
	    FilterStore.filters.prices = raw(newPrices)
	    FilterStore.default.prices = raw(newPrices)
	    this.current.value = this.data.value.length ? this.data.value[0] : null
	})
    }
    
    async fetchModels() {
	this.data.value = await $api.get('girls').then(({data}) => data)
    }
    
    setCurrent(model) {
	this.current.value = model
    }
    
    filtered() {
	const {
	    filters,
	} = FilterStore
	return FilterStore.sorts[filters.sort](this.data.value
	    .filter(({exit, images, properties, languages, tags, pricing, services, category_id}) => {
		let filter = images.length;
		
		if (filters.exit !== 'all') filter = exit === filters.exit
		
		if (filters.language && !languages.map(({id}) => id).includes(filters.language)) filter = false
		
		if (filters.tags.length) {
		    filters.tags.forEach(tag => {
			if (!tags.map(({id}) => id).includes(tag)) filter = false
		    })
		}
		
		const pricingType = exit ? 'exit' : 'apartments'
		const modelPrice = pricing[pricingType]
		const filtersPrice = filters.prices[pricingType]
		
		if (
		    parseInt(modelPrice['1 Час']) < filtersPrice['1 Час'][0] ||
		    parseInt(modelPrice['1 Час']) > filtersPrice['1 Час'][1] ||
		    
		    parseInt(modelPrice['2 Часа']) < filtersPrice['2 Часа'][0] ||
		    parseInt(modelPrice['2 Часа']) > filtersPrice['2 Часа'][1] ||
		    
		    parseInt(modelPrice['Ночь']) < filtersPrice['Ночь'][0] ||
		    parseInt(modelPrice['Ночь']) > filtersPrice['Ночь'][1]
		) return false
		
		if (filters.services.length) {
		    const modelServices = Object.values(services).flat().map(({id}) => id)
		    
		    filters.services.forEach(service => {
			if (!modelServices.includes(service)) filter = false
		    })
		}
		
		if (filters.categories) {
		    if(!filters.categories.includes(category_id)) filter = false
		}
		
		if (filters.properties.length) {
		    properties.forEach(property => {
			const filterPropertyValue = filters.properties.find(({id}) => id === property.id).value
			
			if (property.type === 'range' && filterPropertyValue) {
			    const value = parseInt(property.value)
			    
			    if (
				value < filterPropertyValue[0] ||
				value > filterPropertyValue[1]
			    ) filter = false
			} else if (property.type === 'select' && filterPropertyValue) {
			    if (property.multiple) {
				const modelValues = property.value.split(',')
				
				filterPropertyValue.forEach(value => {
				    if (!modelValues.includes(value.toString())) filter = false
				})
			    } else if (property.value !== filterPropertyValue.toString()) filter = false
			}
		    })
		}
		
		return filter
	    }))
    }
}

export default new ModelsStore()