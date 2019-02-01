import Vue from 'vue';
import App from '../../../src/components/UnSubscribe';

describe('UnSubscribe.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(App);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('div div input').className).to.equal('input is-medium');
  });

  it('should render title correctly', () => {
    const Constructor = Vue.extend(App);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('h3.title').textContent)
      .to.equal('Unsubscribe To Notifications');
  });
});
