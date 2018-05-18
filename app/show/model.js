import DS from 'ember-data';

const {attr, belongsTo, hasMany, Model} = DS;

export default Model.extend({
  name: attr(),
  price: attr(),
  age: attr(),
  day: belongsTo('day'),
  venue: attr(),
  time: attr(),
  photo: attr(),
  artists: hasMany('artist')
});
