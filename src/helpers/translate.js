import { useI18n } from 'vue-i18n'

export default function __(item) {
    const { locale } = useI18n()
    console.log(locale)
    return item ? item[locale] : null
}