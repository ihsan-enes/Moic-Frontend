import { createI18n } from "vue-i18n";
import tr from './locales/tr.js'
import en from './locales/en.js'
import ar from "./locales/ar.js";

const savedLocale = localStorage.getItem('user-locale') || 'tr'; 

const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: "tr",
  messages:{
    tr,
    en,
    ar
  }
});

export default i18n