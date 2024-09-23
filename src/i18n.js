import {createI18n} from 'vue-i18n'

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
		hours: 'Час',
		hours_2: '2 часа',
		night: 'Ночь',
		rate: 'Оценка',
		languages: 'Языка',
		reviews_count: 'Отзывов',
		years: 'лет',
		details: 'Подробнее о девушке',
		more: 'Показать еще',
		reviews: {
		    1: 'Отзывы',
		    2: 'Клиентов',
		},
	    },
	    thanks: {
		title: 'Спасибо за заявку!',
		button: 'Ок',
	    },
	    blank: {
		title: 'Заполните анкету',
		subtitle: 'для добавления на площадку',
		form: {
		    name: {
			label: 'Имя',
			placeholder: 'Введите ваше имя',
		    },
		    email: {
			label: 'Почта',
			placeholder: 'Введите ваш E-mail',
		    },
		    phone: {
			label: 'Телефон',
			placeholder: 'Введите номер телефона',
		    },
		    telegram: {
			label: 'Telegram',
			placeholder: 'Ссылка на ваш Телеграм',
		    },
		    whatsapp: {
			label: 'Whatsapp',
			placeholder: 'Ссылка на ваш Ватсап',
		    },
		},
		button: 'Отправить анкету'
	    },
	    main: {},
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
	    header: {
		chat: 'Chat bot'
	    },
	    footer: {
		tech: 'Technical support',
		apply: 'Fill out the form',
	    },
	    shared: {
		swipe: 'Swipe',
		catalogue: 'Catalog',
		cancel: 'Cancel',
		search: 'Search',
		filter: 'Filter',
		hours: 'Hour',
		hours_2: '2 hours',
		night: 'Night',
		rate: 'Rating',
		languages: 'Languages',
		reviews_count: 'Reviews',
		years: 'years',
		details: 'More about the girl',
		more: 'Show more',
		reviews: {
		    1: 'Reviews',
		    2: 'Clients',
		},
	    },
	    main: {},
	    model: {
		preferences: 'Preferences',
	    },
	    catalogue: {
		extended_filter: 'Advanced filter',
		found: 'girls found',
	    },
	    filters: {
		main: 'General',
		parameters: 'Girl parameters',
		services: 'Services',
		pricing: 'Prices',
	    },
	    policy: {
		title: "Privacy Policy"
	    },
	    terms: {
		title: "Terms of Use"
	    },
	}
    }
})