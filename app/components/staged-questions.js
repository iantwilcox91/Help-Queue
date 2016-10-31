import Ember from 'ember';

export default Ember.Component.extend({
  checkOne: true,
  checkTwo: false,
  checkThree: false,
  helpForm: false,
  actions: {
    hideCheckOne() {
      this.set('checkOne', false);
      this.set('checkTwo', true);
    },
    hideCheckTwo() {
      this.set('checkTwo', false);
      this.set('checkThree', true);
    },
    hideCheckThree() {
      this.set('checkThree', false);
      this.set('helpForm', true);
    },
    saveHelpRequest() {
      this.set('checkOne', true);
      this.set('helpForm', false);
    }
  }
});
