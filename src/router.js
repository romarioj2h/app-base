import Vue from 'vue'
import VueRouter from 'vue-router'
import './quasar'
import Acerca from './components/Acerca.vue'
import Home from './components/Home.vue'
import Settings from './components/Settings.vue'

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/settings', component: Settings },
    { path: '/acerca', component: Acerca },
];

const router = new VueRouter({
    routes // short for `routes: routes`
});

export default router;
