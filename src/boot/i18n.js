import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from 'src/i18n'

Vue.use(VueI18n)

let selectedLanguage = localStorage.selectedLanguage ? localStorage.selectedLanguage : 'en-us';
const i18n = new VueI18n({
  locale: selectedLanguage,
  fallbackLocale: selectedLanguage,
  messages
})

export default ({ app }) => {
  // Set i18n instance on app
  app.i18n = i18n
}

export { i18n }
