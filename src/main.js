import Vue from 'vue'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'
import './global.scss'
import { Header,InfiniteScroll,Spinner } from 'mint-ui';



Vue.use(MintUI)
Vue.component(Header.name, Header);
Vue.component(InfiniteScroll);
Vue.component(Spinner.name, Spinner);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')