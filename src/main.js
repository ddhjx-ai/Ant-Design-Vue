import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {Button, Layout, Menu, Icon, Breadcrumb, Drawer, Radio} from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.less';

import Auth from './components/Auth.vue'
Vue.component('Auth', Auth);

Vue.use(Button).use(Layout).use(Menu).use(Icon).use(Breadcrumb).use(Drawer).use(Radio);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
