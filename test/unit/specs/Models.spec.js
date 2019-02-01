import Vue from 'vue';
import App from '../../../src/components/Models';

describe('Models.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(App);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.ModelImg')).to.exist;
  });

  it('should render title correctly', () => {
    const Constructor = Vue.extend(App);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('h3.title').textContent)
      .to.equal('Aurora Forecast');
  });
});
