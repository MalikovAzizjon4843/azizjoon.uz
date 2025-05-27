import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './en'
import uz from './uz'
import ru from './ru'

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
