import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store/store.js'
import BaseIcon from '@/components/BaseIcon.vue'
import 'nprogress/nprogress.css'
import Vuelidate from 'vuelidate'
import DateFilter from '@/filters/date.js'

Vue.filter('date', DateFilter)

Vue.use(Vuelidate)

Vue.component('BaseIcon', BaseIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
