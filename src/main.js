import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueNavigationBar from 'vue-navigation-bar';
import './helpers/vue-navigation-bar.css';

Vue.config.productionTip = false
Vue.component('vue-navigation-bar', VueNavigationBar);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
