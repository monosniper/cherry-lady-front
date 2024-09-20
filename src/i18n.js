import { createI18n } from 'vue-i18n'

export const i18n = createI18n({
	locale: 'ru',
	fallbackLocale: 'ru',
	messages: {
		ru: {
			header: {
				chat: 'Чат бот'
			},
			footer: {
				tech: 'Техническая поддержка',
				apply: 'Заполнить анкету',
			},
			shared: {
				swipe: 'Свайп',
				catalogue: 'Каталог',
				cancel: 'Отмена',
				search: 'Поиск',
				filter: 'Фильтр',
				hour: 'Час',
				hours_2: '2 часа',
				night: 'Ночь',
				rate: 'Оценка',
				languages: 'Языка',
				reviews_count: 'Отзывов',
				years: 'Отзывов',
				reviews: {
					1: 'Отзывы',
					2: 'Клиентов',
				},
			},
			main: {
			
			},
			model: {
				preferences: 'Предпочтения',
			},
			catalogue: {
				extended_filter: 'Расширенный фильтр',
				found: 'найдено девушек',
			},
			filters: {
				main: 'Общие',
				parameters: 'Параметры девушки',
				services: 'Услуги',
				pricing: 'Цены',
			},
			policy: {
				title: "Политика конфиденциальности"
			},
			terms: {
				title: "Условия пользования"
			},
		},
		en: {

		}
	}
})