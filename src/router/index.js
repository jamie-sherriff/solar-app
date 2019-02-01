import Vue from 'vue';
import Router from 'vue-router';
import Landing from '@/components/Landing';
import Models from '@/components/Models';
import Charts from '@/components/Charts';
import History from '@/components/History';
import Subscribe from '@/components/Subscribe';
import UnSubscribe from '@/components/UnSubscribe';
import Live from '@/components/Live';
import About from '@/components/About';
// import PushNotifications from '@/components/PushNotifications';

let Invalid = {
  template: '#Invalid'
};

const validateConfig = {
  errorBagName: 'validateErrors'
};


import VeeValidate from 'vee-validate';

Vue.use(VeeValidate, validateConfig);
Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Root',
      template: '#Landing',
      component: Landing
    },
    {
      path: '/latest',
      name: 'Landing',
      template: '#Landing',
      component: Landing
    },
    {
      path: '/Charts',
      name: 'Charts',
      template: '#Charts',
      component: Charts
    },
    {
      path: '/models',
      name: 'Models',
      template: '#Models',
      component: Models
    },
    {
      path: '/live',
      name: 'Live',
      template: '#Live',
      component: Live
    },
    {
      path: '/History',
      name: 'History',
      template: '#History',
      component: History
    },
    {
      path: '/About',
      name: 'About',
      template: '#About',
      component: About
    },
    {
      path: '/Subscribe',
      name: 'Subscribe',
      template: '#Subscribe',
      component: Subscribe
    },
    {
      path: '/UnSubscribe',
      name: 'UnSubscribe',
      template: '#UnSubscribe',
      component: UnSubscribe
    },
    // {
    //   path: '/PushNotifications',
    //   name: 'PushNotifications',
    //   template: '#PushNotifications',
    //   component: PushNotifications
    // },
    {
      path: '/invalid',
      name: 'Invalid',
      template: '#Invalid',
      component: Invalid
    }
  ]
});
