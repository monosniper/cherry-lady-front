import '@nanoandrew4/vue3-carousel-3d/dist/style.css'
import 'vue-final-modal/style.css'
import './assets/css/main.css'
import 'vue3-carousel/dist/carousel.css'


import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'
import {i18n} from "@/i18n.js";
import Main from "@/components/layout/Main.vue";
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import Modals from "@/components/layout/Modals.vue";
import Blank from "@/components/modals/Blank.vue";
import LinkNotifier from "@/components/modals/LinkNotifier.vue";
import IconLabel from "@/components/shared/IconLabel.vue";
import Logo from "@/components/shared/Logo.vue";
import Properties from "@/components/shared/Properties.vue";
import Spacer from "@/components/shared/Spacer.vue";
import TypeSwitch from "@/components/shared/TypeSwitch.vue";
import Filter from "@/components/Filter.vue";
import ModelInfo from "@/components/ModelInfo.vue";
import ModelInfoMain from "@/components/ModelInfoMain.vue";
import Models from "@/components/Models.vue";
import ModelSwiper from "@/components/ModelSwiper.vue";
import Preferences from "@/components/Preferences.vue";
import Reviews from "@/components/Reviews.vue";
import Swiper from "@/components/Swiper.vue";
import Title from "@/components/shared/Title.vue";
import LanguageSwitch from "@/components/layout/LanguageSwitch.vue";
import VButton from "@/components/shared/ui/VButton.vue";
import VIcon from "@/components/shared/ui/VIcon.vue";
import Tags from "@/components/shared/Tags.vue";
import {Carousel3dPlugin} from '@nanoandrew4/vue3-carousel-3d'
import Pagination from "@/components/shared/Pagination.vue";
import Menu from "@/components/layout/Menu.vue";
import {createVfm} from 'vue-final-modal'
import Thanks from "@/components/modals/Thanks.vue";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Model from "@/components/Model.vue";


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(Carousel3dPlugin)
app.use(ElementPlus)
app.use(createVfm())

app.component('Main', Main)
    .component('Header', Header)
    .component('Footer', Footer)
    .component('Modals', Modals)
    .component('Blank', Blank)
    .component('LinkNotifier', LinkNotifier)
    .component('VButton', VButton)
    .component('IconLabel', IconLabel)
    .component('Logo', Logo)
    .component('Properties', Properties)
    .component('Spacer', Spacer)
    .component('TypeSwitch', TypeSwitch)
    .component('Filter', Filter)
    .component('ModelInfo', ModelInfo)
    .component('ModelInfoMain', ModelInfoMain)
    .component('Models', Models)
    .component('ModelSwiper', ModelSwiper)
    .component('Preferences', Preferences)
    .component('Reviews', Reviews)
    .component('Swiper', Swiper)
    .component('Title', Title)
    .component('LanguageSwitch', LanguageSwitch)
    .component('VIcon', VIcon)
    .component('Menu', Menu)
    .component('Tags', Tags)
    .component('Thanks', Thanks)
    .component('Pagination', Pagination)
    .component('Model', Model)

app.mount('#app')
