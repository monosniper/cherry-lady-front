import {reactive, ref} from "vue";
import i1 from '@images/girls/1.png'
import i2 from '@images/girls/2.png'
import i3 from '@images/girls/3.png'

class ModelsStore {
	constructor() {
		this.data = reactive([])
		this.current = ref({})
		this.fetchModels()
		this.current.value = this.data[0]
	}
	
	async fetchModels() {
		this.data = [
			{
				image: i1,
				first_name: 'Valeriya',
				last_name: 'Iriska',
				location: 'Москва',
				reviews: 48,
				rating: 4.8,
				age: 23,
				pricing: {
					1: 100,
					2: 180,
					night: 480,
				},
				tags: [
					'Индивидуалка',
					'Анальный секс',
					'МБР',
					'Эскорт',
					'Целуюсь',
					'Выезд',
					'Двойное проникновение',
					'Вирт',
					'Круглосуточно',
				],
				properties: [
					{ key: 'Цвет волос', value: 'Русые волосы' },
					{ key: 'Цвет глаз', value: 'Карий' },
					{ key: 'Национальность', value: 'Русская' },
					{ key: 'Размер груди', value: '3' },
					{ key: 'Рост', value: '175см' },
				]
			},
			{
				image: i2,
				first_name: 'Valeriya',
				last_name: 'Pipiska',
				location: 'Санкт-Петербург',
				reviews: 12,
				rating: 4.8,
				age: 13,
				pricing: {
					1: 400,
					2: 600,
					night: 1000,
				},
				tags: [
					'Индивидуалка',
					'Анальный секс',
					'МБР',
					'Эскорт',
					'Целуюсь',
					'Выезд',
					'Двойное проникновение',
					'Вирт',
					'Круглосуточно',
				],
				properties: [
					{ key: 'Цвет волос', value: 'Рыжие волосы' },
					{ key: 'Цвет глаз', value: 'Зеленый' },
					{ key: 'Национальность', value: 'Татарка' },
					{ key: 'Размер груди', value: '69' },
					{ key: 'Рост', value: '165см' },
				]
			},
			{
				image: i3,
				first_name: 'Anatoliy',
				last_name: 'Virginia',
				location: 'Псков',
				reviews: 48,
				rating: 4.8,
				age: 23,
				pricing: {
					1: 150,
					2: 200,
					night: 500,
				},
				tags: [
					'Индивидуалка',
					'Выезд',
					'Двойное проникновение',
					'Вирт',
					'Круглосуточно',
				],
				properties: [
					{ key: 'Цвет глаз', value: 'Карий' },
					{ key: 'Национальность', value: 'Русская' },
					{ key: 'Размер груди', value: '1' },
					{ key: 'Рост', value: '190см' },
				]
			},
		]
	}
	
	setCurrent(model) {
		this.current.value = model
	}
}

export default new ModelsStore()