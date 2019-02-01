import Vue from 'vue';
import App from '../../../src/components/About';

describe('About.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(App);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('p.subtitle').textContent)
      .to.equal('Welcome to Solar App');
  });

  it('should render title correctly', () => {
    const Constructor = Vue.extend(App);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('h3.title').textContent)
      .to.equal('About');
  });
});
