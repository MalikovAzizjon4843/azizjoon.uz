import { createI18n } from 'vue-i18n'
import uz from './uz.json'
import ru from './ru.json'
import en from './en.json'

const savedLang = typeof localStorage !== 'undefined'
  ? localStorage.getItem('lang') || 'uz'
  : 'uz'

const i18n = createI18n({
  legacy: false,
  locale: savedLang,
  fallbackLocale: 'uz',
  messages: { uz, ru, en }
})

export default i18n
