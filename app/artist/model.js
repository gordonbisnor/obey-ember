import DS from 'ember-data';

const {attr, Model, hasMany} = DS;

export default Model.extend({
  name: attr(),
  description: attr(),
  photo: attr(),
  shows: hasMany('show'),
  quote: attr(),
  obeyUrl: attr()
});
