import Vue from 'vue'
import App from './App.vue'
import VideoBackground from 'vue-responsive-video-background-player';
import VueAwesomeSwiper from 'vue-awesome-swiper';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTv, faLaptop, faGamepad, faTabletAlt, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import 'swiper/css/swiper.css'

library.add(faTv, faLaptop, faGamepad, faTabletAlt, faPlus, faMinus)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueAwesomeSwiper, {
  autoplay: 2000
});

Vue.component('video-background', VideoBackground);

import { BootstrapVue } from 'bootstrap-vue';

import '../../assets/scss/main.scss';

Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
