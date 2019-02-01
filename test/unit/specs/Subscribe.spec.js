import Vue from 'vue';
import VeeValidate from 'vee-validate';

import App from '../../../src/components/Subscribe';

describe('Subscribe.vue', () => {
  it('should render correct contents', () => {
    Vue.use(VeeValidate);
    const Constructor = Vue.extend(App);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('div div input').className).to.equal('input is-medium');
  });

  it('should render title correctly', () => {
    const Constructor = Vue.extend(App);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('h3.title').textContent)
      .to.equal('Subscribe To Notifications');
  });
});
