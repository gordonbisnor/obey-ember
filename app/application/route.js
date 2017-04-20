import Ember from 'ember';

export default Ember.Route.extend({
  
  model() {
    return Ember.RSVP.hash({
      days: this.store.findAll('day'),
      shows: this.store.findAll('show'),
      artists: this.store.findAll('artist')
    });
  }
  
});
