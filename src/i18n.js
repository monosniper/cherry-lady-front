import {createI18n} from 'vue-i18n'

export const i18n = createI18n({
    legacy: false,
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
		back: 'Назад',
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
	    link: {
		title: 'Друг!',
		subtitle: 'Иногда {0} меняет свою ссылку.',
		subtitle_2: 'Подпишись на наш {0}, что бы не потерять нас в случае блокировок.',
		subscribe: 'Подписаться',
		later: 'Потом',
		dont_show: 'Не показывать',
		accent: 'Cherry Lady',
		accent_2: 'Телеграм-канал',
	    },
	    main: {},
	    model: {
		preferences: 'Предпочтения',
	    },
	    catalogue: {
		filter: 'Фильтр',
		extended_filter: 'Расширенный фильтр',
		found: 'Найдено девушек',
	    },
	    filters: {
		from: 'от',
		to: 'до',
		main: 'Общие',
		parameters: 'Параметры девушки',
		by_language: 'По языку',
		by_tags: 'По тегам',
		choose_languages: 'Выберите языки',
		choose_tags: 'Выберите теги',
		services: 'Услуги',
		pricing: 'Цены',
		dollars: 'Долларов',
		exit: 'Выезжаю',
		apartments: 'Не выезжаю',
		sort: 'Сортировка',
		price_apartments: 'Апартаменты',
		price_exit: 'Выезд',
		all: 'Все',
		reset: 'Сбросить',
		sorts: {
		    new: 'Новые анкеты',
		    popular: 'Популярные',
		    reviews: 'С отзывами',
		    cheap: 'Дешевые',
		    expensive: 'Дорогие',
		},
	    },
	    policy: {
		title: "Политика конфиденциальности"
	    },
	    terms: {
		title: "Условия пользования"
	    },
	},
	ar: {
	    "header": {
		"chat": "شات بوت"
	    },
	    "footer": {
		"tech": "الدعم الفني",
		"apply": "املأ الاستمارة"
	    },
	    "shared": {
		"swipe": "سحب",
		"catalogue": "الكتالوج",
		"cancel": "إلغاء",
		"search": "بحث",
		"filter": "فلتر",
		"hours": "ساعة",
		"hours_2": "ساعتان",
		"night": "ليلة",
		"rate": "التقييم",
		"back": "رجوع",
		"languages": "اللغة",
		"reviews_count": "مراجعات",
		"years": "سنوات",
		"details": "المزيد عن الفتاة",
		"more": "إظهار المزيد",
		"reviews": {
		    "1": "المراجعات",
		    "2": "العملاء"
		}
	    },
	    "thanks": {
		"title": "شكرًا لطلبك!",
		"button": "موافق"
	    },
	    "blank": {
		"title": "املأ الاستمارة",
		"subtitle": "لإضافة إلى المنصة",
		"form": {
		    "name": {
			"label": "الاسم",
			"placeholder": "أدخل اسمك"
		    },
		    "email": {
			"label": "البريد الإلكتروني",
			"placeholder": "أدخل بريدك الإلكتروني"
		    },
		    "phone": {
			"label": "الهاتف",
			"placeholder": "أدخل رقم هاتفك"
		    },
		    "telegram": {
			"label": "تيليجرام",
			"placeholder": "رابط تيليجرام الخاص بك"
		    },
		    "whatsapp": {
			"label": "واتساب",
			"placeholder": "رابط واتساب الخاص بك"
		    }
		},
		"button": "إرسال الاستمارة"
	    },
	    "link": {
		"title": "صديق!",
		"subtitle": "أحيانًا يغير {0} رابطه.",
		"subtitle_2": "اشترك في {0} الخاص بنا حتى لا تفقدنا في حال الحظر.",
		"subscribe": "اشترك",
		"later": "لاحقًا",
		"dont_show": "لا تظهر",
		"accent": "Cherry Lady",
		"accent_2": "قناة تيليجرام"
	    },
	    "main": {},
	    "model": {
		"preferences": "التفضيلات"
	    },
	    "catalogue": {
		"filter": "فلتر",
		"extended_filter": "فلتر موسع",
		"found": "تم العثور على الفتيات"
	    },
	    "filters": {
		"from": "من",
		"to": "إلى",
		"main": "عام",
		"parameters": "معايير الفتاة",
		"by_language": "حسب اللغة",
		"by_tags": "حسب العلامات",
		"choose_languages": "اختر اللغات",
		"choose_tags": "اختر العلامات",
		"services": "الخدمات",
		"pricing": "الأسعار",
		"dollars": "دولارات",
		"exit": "خروج",
		"apartments": "لا تخرج",
		"sort": "ترتيب",
		"price_apartments": "شقق",
		"price_exit": "خروج",
		"all": "الكل",
		"reset": "إعادة تعيين",
		"sorts": {
		    "new": "استمارات جديدة",
		    "popular": "الشعبية",
		    "reviews": "مع مراجعات",
		    "cheap": "رخيصة",
		    "expensive": "غالية"
		}
	    },
	    "policy": {
		"title": "سياسة الخصوصية"
	    },
	    "terms": {
		"title": "شروط الاستخدام"
	    }
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
		back: 'Back',
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
		filter: "Filter",
		extended_filter: 'Advanced filter',
		found: 'Found girls',
	    },
	    filters: {
		main: 'General',
		sort: 'Sort by',
		by_tags: 'By tags',
		reset: 'Reset',
		choose_tags: 'Choose tags',
		by_language: 'By language',
		choose_languages: 'Choose languages',
		parameters: 'Girl parameters',
		services: 'Services',
		pricing: 'Prices',
		from: 'from',
		dollars: 'Dollars',
		to: 'to',
		price_apartments: 'Apartments',
		price_exit: 'leaving',
		"exit": "Leaving",
		"apartments": "Not leaving",
		"all": "All",
		"sorts": {
		    "new": "New profiles",
		    "popular": "Popular",
		    "reviews": "With reviews",
		    "cheap": "Cheap",
		    "expensive": "Expensive"
		}
	    },
	    policy: {
		title: "Privacy Policy"
	    },
	    terms: {
		title: "Terms of Use"
	    },
	    "thanks": {
		"title": "Thank you for your application!",
		"button": "Ok"
	    },
	    "blank": {
		"title": "Fill out the form",
		"subtitle": "to be added to the platform",
		"form": {
		    "name": {
			"label": "Name",
			"placeholder": "Enter your name"
		    },
		    "email": {
			"label": "Email",
			"placeholder": "Enter your E-mail"
		    },
		    "phone": {
			"label": "Phone",
			"placeholder": "Enter your phone number"
		    },
		    "telegram": {
			"label": "Telegram",
			"placeholder": "Link to your Telegram"
		    },
		    "whatsapp": {
			"label": "Whatsapp",
			"placeholder": "Link to your WhatsApp"
		    }
		},
		"button": "Submit the form"
	    },
	    "link": {
		"title": "Friend!",
		"subtitle": "Sometimes {0} changes its link.",
		"subtitle_2": "Subscribe to our {0} so you don’t lose us in case of blocks.",
		"subscribe": "Subscribe",
		"later": "Later",
		"dont_show": "Do not show",
		"accent": "Cherry Lady",
		"accent_2": "Telegram channel"
	    },
	}
    }
})