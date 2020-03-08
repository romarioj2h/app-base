<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated>
            <q-toolbar>
                <q-btn
                        flat
                        dense
                        round
                        @click="leftDrawerOpen = !leftDrawerOpen"
                        aria-label="Menu"
                        icon="menu"
                />

                <q-toolbar-title>
                    {{ $t('appName') }}
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-drawer
                v-model="leftDrawerOpen"
                bordered
                content-class="bg-grey-2"
        >
            <q-list>
                <q-item-label header>Menu</q-item-label>
                <q-item clickable tag="a" href="#/" v-ripple>
                    <q-item-section avatar>
                        <q-icon name="store" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>{{ $t('menu.home') }} </q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable tag="a" href="#/settings" v-ripple>
                    <q-item-section avatar>
                        <q-icon name="settings_applications" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>{{ $t('menu.settings') }} </q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable tag="a" href="#/acerca" v-ripple>
                    <q-item-section avatar>
                        <q-icon name="info" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>{{ $t('menu.about') }}</q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-drawer>

        <q-page-container>
            <q-page>
                <router-view></router-view>
                <q-dialog v-model="languageDialog" persistent>
                    <q-card style="width: 300px">
                        <q-card-section>
                            <div class="text-h6">Idioma</div>
                        </q-card-section>
                        <q-card-section>
                            <q-list separator>
                                <q-item v-for="language in languages" v-bind:key="language.short" clickable v-ripple :active="language.short == selectedLanguage.short" @click="setLanguage(language)">
                                    <q-item-section avatar>
                                        <q-icon name="language" />
                                    </q-item-section>
                                    <q-item-section>{{ language.long }}</q-item-section>
                                </q-item>
                            </q-list>
                        </q-card-section>
                        <q-card-actions align="right" class="bg-white text-teal">
                            <q-btn flat label="OK" v-close-popup @click="setLanguage(selectedLanguage)" />
                        </q-card-actions>
                    </q-card>
                </q-dialog>
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script>

    import Vue from 'vue';
    import {mapState} from 'vuex';

    export default {
        name: 'LayoutDefault',
        computed: mapState(['languages']),
        data () {
            return {
                languageDialog: false,
                leftDrawerOpen: false,
                selectedLanguage: this.$store.state.curLanguage,
            }
        },
        created() {
            if (!localStorage.selectedLanguage) {
                this.languageDialog = true;
            }
            Vue.i18n.set(this.$store.state.curLanguage.short);
        },
        methods: {
            setLanguage: function (language) {
                if (language.short == 'en') {//hack for english
                    this.selectedLanguage = this.languages[1];
                }
                this.selectedLanguage = language;
            },
        },
        watch: {
            'selectedLanguage': {
                immediate: false,
                handler(newLang) {
                    Vue.i18n.set(newLang.short);
                    this.$store.commit('setLanguage', newLang);
                }
            }
        }
    }
</script>

<style>
</style>
