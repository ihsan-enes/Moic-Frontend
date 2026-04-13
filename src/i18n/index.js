import { createI18n } from "vue-i18n";
import tr from './locales/tr.js'
import en from './locales/en.js'
import ar from "./locales/ar.js";

const i18n = createI18n({
  legacy: false,
  locale: "tr",
  fallbackLocale: "en",
  messages:{
    tr,
    en,
    ar
  }
});

export default i18n