import Vue from 'vue';
import App from '../../../src/components/Landing';

describe('Landing.vue', () => {
  it('should load correctly', () => {
    const Constructor = Vue.extend(App);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.container')).to.exist;
  });
  it('should render correct contents', () => {
    const Constructor = Vue.extend(App);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('p').textContent)
      .to.equal('Loading...');
  });

  it('should render content correctly', () => {
    const Constructor = Vue.extend(App);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('div.container p').textContent)
      .to.contain('Recent Kp Values');
  });

  it('should render peices of content correctly', () => {
    const Constructor = Vue.extend(App);
    const vm = new Constructor().$mount();
    const containerTitltes = vm.$el.querySelectorAll('div.container p');
    expect(containerTitltes.length)
      .to.equal(1);
  });
});
