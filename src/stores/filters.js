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
			leave: null,
			services: [],
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