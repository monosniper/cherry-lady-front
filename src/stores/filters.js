import {reactive, ref} from "vue";
import {sortPrices} from "@/helpers/sortPrices.js";

class FilterStore {
    constructor() {
	this.extend = ref(false)
	
	this.filters = reactive({
	    properties: [
		{
		    id: 1,
		    name: 'Цвет волос',
		    type: 'select',
		    value: 1,
		    options: [
			{ id: 1, name: 'Рыжий' },
			{ id: 2, name: 'Еще какой то' },
			{ id: 3, name: 'Еще какой то 2' },
			{ id: 4, name: 'Еще какой то 3' },
		    ]
		},
		{
		    id: 2,
		    name: 'Рост',
		    type: 'range',
		    value: [160, 190],
		},
		{
		    id: 3,
		    name: 'Вес',
		    type: 'range',
		    value: [160, 190],
		},
		{
		    id: 4,
		    name: 'Возраст',
		    type: 'range',
		    value: [160, 190],
		},
		{
		    id: 5,
		    name: 'Размер груди',
		    type: 'range',
		    value: [1, 4],
		},
		{
		    id: 6,
		    name: 'Размер обуви',
		    type: 'range',
		    value: [35, 46],
		},
		{
		    id: 7,
		    name: 'Размер одежды',
		    type: 'range',
		    value: [35, 70],
		},
	    ],
	    sort: 'Новые анкеты',
	    tags: [],
	    services: [],
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
	
	this.sorts = {
	    'Новые анкеты': (data) => data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)),
	    'Популярные': (data) => data.sort((a, b) => b.views - a.views),
	    'С отзывами': (data) => data.filter(item => item.reviews.length > 0),
	    'Дешевые': (data) => sortPrices(data, true),
	    'Дорогие': (data) => sortPrices(data, false),
	}
    }
}

const g = {
    pricing: {
	apartments: {
	    1: 100,
	    2: 100,
	    night: 100,
	},
	exit: {
	    1: 100,
	    2: 100,
	    night: 100,
	},
    }
}

export default new FilterStore()