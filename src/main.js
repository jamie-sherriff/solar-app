// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

require('../node_modules/bulma/css/bulma.css');
require('../node_modules/font-awesome/css/font-awesome.css');
require('./css/Subscribe.css');
require('./css/Models.css');
require('./css/Charts.css');
require('./css/MainApp.css');
require('./css/NavBar.css');
require('./css/Live.css');
require('./css/About.css');
require('./css/AppNotifications.css');


import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VModal from 'vue-js-modal';
import Notifications from 'vue-notification';


Vue.use(Notifications);
Vue.use(VModal);
// import Routing from '@/components/Routing';

// console.log(`Environment is in production: `);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // data: {
  //   active: 'home'
  // },
  // methods: {
  //   makeActive(item) {
  //     console.log(item);
  //     this.active = item;
  //   }
  // },
  router,
  template: '<App/>',
  components: { App }
});
