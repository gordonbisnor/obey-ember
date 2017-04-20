import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('day', {path: "/day/:id"});
  this.route('artist', {path: "/artist/:id"});
});

export default Router;
