import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import './main.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

Vue.config.productionTip = false

new Vue({
  created () {
    AOS.init()
  },
  router,
  render: h => h(App)
}).$mount('#app')
