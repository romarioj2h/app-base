import Vue from 'vue';
import Vuex from 'vuex';
import vuexI18n from 'vuex-i18n';

import translationsPt from './locale/pt';
import translationsEs from './locale/es';
import translationsEn from './locale/en';

Vue.use(Vuex);

let state = {
    curLanguage: null,
    languages: [
        {
            short: 'en',
            long: 'English'
        },
        {
            short: 'pt',
            long: 'Português'
        },
        {
            short: 'es',
            long: 'Español'
        }
    ]
};

if (localStorage.selectedLanguage) {
    state.curLanguage = state.languages.find((language) => {
        return localStorage.selectedLanguage == language.short;
    });
} else {
    state.curLanguage = state.languages[0];
}

const mutations = {
    setLanguage(state, lang) {
        localStorage.selectedLanguage = lang.short;
        state.curLanguage = lang;
    }
}

const store = new Vuex.Store({
    state,
    mutations
});

Vue.use(vuexI18n.plugin, store);

Vue.i18n.add('pt', translationsPt);
Vue.i18n.add('es', translationsEs);
Vue.i18n.add('en', translationsEn);

export default store;
