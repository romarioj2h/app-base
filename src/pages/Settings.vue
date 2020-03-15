<template>
    <div class="row q-ma-md">
        <div class="col-12">
            <q-list bordered separator class="rounded-borders">
                <q-item-label header>{{ $t('menu.settings') }}</q-item-label>
                <q-item clickable v-ripple>
                    <q-item-section>
                        <q-item-label>
                            {{ $t('settings.language') }}
                        </q-item-label>
                    </q-item-section>
                    <q-menu auto-close>
                        <q-list>
                            <q-item v-for="language in languages" v-bind:key="language.short" clickable @click="setLanguage(language)">
                                <q-item-section>{{ language.long }}</q-item-section>
                            </q-item>
                        </q-list>
                    </q-menu>
                </q-item>
            </q-list>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {mapState} from 'vuex';
    import languages from '../i18n/languages';

    export default {
        name: 'Settings',
        data () {
            return {
                selectedLanguage: this.$store.state.curLanguage,
                languages: languages
            }
        },
        methods: {
            setLanguage: function (language) {
                this.$i18n.locale = language.short;
                localStorage.selectedLanguage = language.short;
            },
        }
    }
</script>
