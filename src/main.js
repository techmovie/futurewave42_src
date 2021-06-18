import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
router.beforeEach(async(to, from, next) => {
  const configData = store.state.config
  if (configData&&Object.keys(configData).length) {
    next()
  } else {
    await store.dispatch('getConfig')
    next()
  }
})
createApp(App).use(store).use(router).mount('#app')
