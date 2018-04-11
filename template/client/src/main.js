import Vue from 'vue'
// read localStorage stored data
import './stored'
{{#if i18nEn}}
// locale
import i18n from './locales'
{{/if}}

// router and store
import store from './store'
import router, { hook as routerHook } from './router'
import { sync } from 'vuex-router-sync'
sync(store, router)

// ui library
import './element-ui'

// ajax
import './http'

const userPromise = store.dispatch('initUserInfo')
routerHook(userPromise)

// main component
import App from './App'

import './socket'

userPromise.then(() => {
  const app = new Vue({
{{#if i18nEn}}
    i18n,
{{/if}}
    router,
    store,
    ...App // Object spread copying everything from App.vue
  })
  // actually mount to DOM
  app.$mount('app')
})
