import {reactive, ref} from "vue";
import i1 from '@images/girls/1.png'
import i2 from '@images/girls/2.png'
import i3 from '@images/girls/3.png'
import FilterStore from '@/stores/filters.js'
import $api from "@/api/index.js";

class CategoryStore {
    constructor() {
	this.data = ref([])
	this.fetch()
    }
    
    fetch() {
	$api.get('categories').then(({ data }) => data).then(rs => {
	    this.data.value = rs
	})
    }
}

export default new CategoryStore()