import '@/assets/css/tailwind.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCompositionApi from '@vue/composition-api'
import { useSupercharge } from '@/composables'
useSupercharge()
Vue.config.productionTip = false

Vue.use(VueCompositionApi)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
