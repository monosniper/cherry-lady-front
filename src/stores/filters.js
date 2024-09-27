import {reactive, ref} from "vue";

class FilterStore {
    constructor() {
	this.extend = ref(false)
	
	this.filters = reactive({
	    height: [160, 190],
	    age: [18, 40],
	    weight: [45, 60],
	    hair: 'Рыжий',
	    sort: 'Новые анкеты',
	    tags: [],
	    language: null,
	    exit: true,
	    prices: {
		apartments: {
		    1: [30, 100],
		    2: [30, 100],
		    night: [30, 100],
		},
		exit: {
		    1: [30, 100],
		    2: [30, 100],
		    night: [30, 100],
		},
	    },
	})
	
	this.hair_colors = reactive([
	    'Рыжий',
	    'Не рыжий',
	    'Еще какой то',
	    'Обалденный',
	    'Ыхыхыххы',
	])
	
	this.sorts = reactive([
	    'Новые анкеты',
	    'Популярные',
	    'С отзывами',
	    'Дешевые',
	    'Дорогие',
	])
    }
}

export default new FilterStore()