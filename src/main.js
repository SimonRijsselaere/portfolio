import Vue from 'vue'
import App from './App.vue'
import Veevelidate from 'vee-validate'
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'

Vue.use(Veevelidate);
Vue.use(BootstrapVue);
Vue.config.productionTip = false
Vue.prototype.$axios = axios


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
