import Vue from 'vue'
import App from './App.vue'
import './quasar'
import store from './store'
import router from './router'
import { db } from './db/db';

Vue.config.productionTip = true;

Vue.db = Vue.prototype.$db = db;

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
