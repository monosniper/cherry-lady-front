import {reactive, ref} from "vue";
import $api from "@/api/index.js";

class SettingStore {
    constructor() {
	this.data = reactive({
	    tech: '',
	    chat: '',
	    privacy: '',
	    terms: '',
	})
	
	this.fetch()
    }
    
    async fetch() {
	const rs = await $api.get('settings')
	
	this.data.tech = rs.tech
	this.data.chat = rs.chat
	this.data.privacy = rs.privacy
	this.data.terms = rs.terms
    }
}

export default new SettingStore()