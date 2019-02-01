import Vue from 'vue';
import App from '../../../src/components/Charts';

describe('Charts.vue', () => {
  it('should render title correctly', () => {
    const Constructor = Vue.extend(App);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('h3.title').textContent)
      .to.contain('Monthly Forecast Daily Peak Kp');
  });

  it('should render all titles', () => {
    const Constructor = Vue.extend(App);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelectorAll('h3.title')).be.length(2);
  });
});
