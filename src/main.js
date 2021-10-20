import Vue from 'vue'
import App from './App.vue'
import router from './router'


import {InfiniteScroll,Spinner,Header,Search} from 'mint-ui';
import './global.scss'


Vue.use(InfiniteScroll);
Vue.component(Spinner.name, Spinner);
Vue.component(Header.name, Header);
Vue.component(Search.name, Search);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')