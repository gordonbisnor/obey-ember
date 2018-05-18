import Ember from 'ember';
import ResetScrollMixin from 'ember-cli-reset-scroll';
import RecognizerMixin from 'ember-gestures/mixins/recognizers';

export default Ember.Route.extend(RecognizerMixin, ResetScrollMixin, {
  recognizers: 'swipe',

  model(params) {
    return this.store.findRecord('artist', params.id);
  },
  swipeRight() {
    console.info('ok swipe right');
  }
  
});
