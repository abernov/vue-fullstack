{{#if i18nEn}}import i18n from '../../locales'{{/if}}
import { {{#if i18nEn}}lang, {{/if}}pageLimit } from '../../stored'
import { save } from '../../storage'
import { {{#if i18nEn}}STORE_KEY_CONFIG_LANG, {{/if}}STORE_KEY_CONFIG_PAGE_LIMIT } from '../../constants'

const state = {
  {{#if i18nEn}}lang: lang,
  // value see http://stackoverflow.com/questions/5580876/navigator-language-list-of-all-languages
  langs: [{
    label: '中文',
    value: 'zh-CN'
  }, {
    label: 'English',
    value: 'en'
  }],
  {{/if}}pageLimit: pageLimit
}

const mutations = {
  UPDATE (state, config) {
    {{#if i18nEn}}state.lang = config.lang || state.lang
    {{/if}}state.pageLimit = config.pageLimit || state.pageLimit
  }{{#if i18nEn}},
  UPDATE_LANG (state, lang) {
    state.lang = lang || state.lang
  }{{/if}}
}

const actions = {
  {{#if i18nEn}}changeLang ({ commit }, lang) {
    i18n.locale = lang
    commit('UPDATE_LANG', lang)
    save(STORE_KEY_CONFIG_LANG, lang)
  },
  {{/if}}updateGlobalConfig ({ commit, state, dispatch }, config) {
    {{#if i18nEn}}if (config.lang !== state.lang) {
      i18n.locale = config.lang
      save(STORE_KEY_CONFIG_LANG, config.lang)
    }
    {{/if}}commit('UPDATE', config)
    {{#if i18nEn}}save(STORE_KEY_CONFIG_LANG, state.lang)
    {{/if}}save(STORE_KEY_CONFIG_PAGE_LIMIT, state.pageLimit)
  }
}

const getters = {
  globalConfig (state) {
    return state
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
