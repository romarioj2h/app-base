<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Menu
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
      <q-dialog v-model="languageDialog" persistent>
        <q-card style="width: 300px">
            <q-card-section>
                <div class="text-h6">{{ $t('settings.language') }}</div>
            </q-card-section>
            <q-card-section>
                <q-list separator>
                    <q-item v-for="language in languages" v-bind:key="language.short" clickable v-ripple :active="language.short == selectedLanguage" @click="setLanguage(language.short)">
                        <q-item-section avatar>
                            <q-icon name="language" />
                        </q-item-section>
                        <q-item-section>{{ language.long }}</q-item-section>
                    </q-item>
                </q-list>
            </q-card-section>
            <q-card-actions align="right" class="bg-white text-teal">
                <q-btn flat label="OK" v-close-popup @click="setLanguage(selectedLanguage)"/>
            </q-card-actions>
        </q-card>
    </q-dialog>
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'
import languages from '../i18n/languages';

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'menu.home',
          icon: 'store',
          link: '#/'
        },
        {
          title: 'menu.settings',
          icon: 'settings_applications',
          link: '#/settings'
        },
        {
          title: 'menu.about',
          icon: 'info',
          link: '#/about'
        }
      ],
      languageDialog: false,
      languages: languages,
      selectedLanguage: null
    }
  },
    created() {
        if (!localStorage.selectedLanguage) {
            this.languageDialog = true;
            this.selectedLanguage = 'en-us';
        }
    },
    methods: {
        setLanguage: function (language) {
            this.$i18n.locale = language;
            localStorage.selectedLanguage = language;
            this.selectedLanguage = language;
        },
    }
}
</script>
