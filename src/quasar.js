import Vue from 'vue'

import './styles/quasar.styl'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import {
    Quasar,
    QLayout,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QDialog,
    QCard,
    QCardSection,
    QSeparator,
    QExpansionItem,
    QLinearProgress,
    QChip,
    QAvatar,
    Notify,
    QImg,
    QScrollArea,
    QPullToRefresh,
    QMenu,
    Ripple,
    QCardActions,
    ClosePopup,
    QSlideItem,
    QPageSticky,
    QInput,
    QSelect,
    QCheckbox
} from 'quasar'

Vue.use(Quasar, {
  config: {
      notify: { /* Notify defaults */ }
  },
  components: {
        QLayout,
        QHeader,
        QDrawer,
        QPageContainer,
        QPage,
        QToolbar,
        QToolbarTitle,
        QBtn,
        QIcon,
        QList,
        QItem,
        QItemSection,
        QItemLabel,
      QDialog,
      QCard,
      QCardSection,
      QSeparator,
      QExpansionItem,
      QLinearProgress,
      QChip,
      QAvatar,
      QImg,
      QScrollArea,
      QPullToRefresh,
      QMenu,
      QCardActions,
      QSlideItem,
      QPageSticky,
      QInput,
      QSelect,
      QCheckbox
  },
  directives: [
      Ripple,
      ClosePopup
  ],
  plugins: [
      Notify
  ]
 })
