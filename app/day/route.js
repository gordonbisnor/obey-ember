import Ember from 'ember';
import ResetScrollMixin from 'ember-cli-reset-scroll';

export default Ember.Route.extend(ResetScrollMixin, {
  
  model(params) {
    return this.store.findRecord('day', params.id);
  }

});
