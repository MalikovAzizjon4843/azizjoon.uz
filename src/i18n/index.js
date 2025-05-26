import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    hero: { title: 'Hi, I’m Developer', subtitle: 'Web Developer' },
    about: { title: 'About Me', desc: 'I create modern websites.' }
  },
  uz: {
    hero: { title: 'Salom, Men Dasturchiman', subtitle: 'Web Dasturchi' },
    about: { title: 'Men haqimda', desc: 'Zamonaviy saytlar yarataman.' }
  },
  ru: {
    hero: { title: 'Привет, я Разработчик', subtitle: 'Веб-разработчик' },
    about: { title: 'Обо мне', desc: 'Создаю современные сайты.' }
  }
}

export default createI18n({
  legacy: false,
  locale: 'en',
  messages
})