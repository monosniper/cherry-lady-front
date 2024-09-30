import {reactive, ref} from "vue";
import i1 from '@images/girls/1.png'
import i2 from '@images/girls/2.png'
import i3 from '@images/girls/3.png'
import FilterStore from '@/stores/filters.js'
import $api from "@/api/index.js";

class ModelsStore {
    constructor() {
	this.data = reactive([])
	this.current = ref({})
	this.fetchModels()
	this.current.value = this.data.length ? this.data[0] : null
    }
    
    async fetchModels() {
	this.data = await $api.get('girls').then(({ data }) => data)
    }
    
    setCurrent(model) {
	this.current.value = model
    }
    
    filtered() {
	const { filters } = FilterStore
	
	return this.data.filter(model => {
	    if(filters.height)
	    
	    return true
	})
    }
}

export default new ModelsStore()