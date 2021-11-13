import Vue from 'vue'
import App from './App.vue'
import VideoBackground from 'vue-responsive-video-background-player';

Vue.component('video-background', VideoBackground);

import { BootstrapVue } from 'bootstrap-vue';

import '../../assets/scss/main.scss';

Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
