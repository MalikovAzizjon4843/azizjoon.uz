import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from '../locales/en.json'
import uz from '../locales/uz.json'
import ru from '../locales/ru.json'

Vue.use(VueI18n)

export default new VueI18n({
    locale: 'en', // boshlang‘ich til
    fallbackLocale: 'en',
    messages: {
        en,
        uz,
        ru
    }
})
