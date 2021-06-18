import { createStore } from 'vuex'
import { getConfig } from '../api'

export default createStore({
  state: {
    config: [],
  },
  getters: {
  },
  mutations: {
    SET_CONFIG: (state, config) => {
      state.config = config
    },
  },
  actions: {
    getConfig({ commit }) {
      return new Promise((resolve, reject) => {
        getConfig().then(res => {
          commit('SET_CONFIG', res.data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
  },
  modules: {
  }
})
