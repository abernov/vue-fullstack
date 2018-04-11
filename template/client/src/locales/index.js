import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { merge } from 'lodash'
import { lang } from '../stored'

import zhCN from './zh-CN'
import en from './en'
import eleZhCN from 'element-ui/lib/locale/lang/zh-CN'
import eleEn from 'element-ui/lib/locale/lang/en'

import ElementLocale from 'element-ui/lib/locale'

const locales = {
  'zh-CN': merge(zhCN, eleZhCN),
  en: merge(en, eleEn)
}

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: lang,
  fallbackLocale: 'zh-CN',
  silentTranslationWarn: true,
  messages: locales
})

ElementLocale.i18n((key, value) => i18n.t(key, value))

export default i18n
