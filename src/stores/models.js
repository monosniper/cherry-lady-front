import {reactive, ref} from "vue";
import i1 from '@images/girls/1.png'
import i2 from '@images/girls/2.png'
import i3 from '@images/girls/3.png'
import FilterStore from '@/stores/filters.js'
import $api from "@/api/index.js";

class ModelsStore {
    constructor() {
	this.data = ref([])
	this.current = ref({})
	this.fetchModels().then(() => {
	    this.current.value = this.data.value.length ? this.data.value[0] : null
	})
    }
    
    async fetchModels() {
	this.data.value = await $api.get('girls').then(({ data }) => data)
    }
    
    setCurrent(model) {
	this.current.value = model
    }
    
    filtered() {
	const { filters } = FilterStore
	
	return this.data.value.filter(model => {
	    if(filters.height)
	    
	    return true
	})
    }
}

export default new ModelsStore()