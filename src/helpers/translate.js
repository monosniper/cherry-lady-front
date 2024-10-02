import {i18n} from "@/i18n.js";

export default function __(item) {
    return item ? item[i18n.global.locale] : ''
}