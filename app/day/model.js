import DS from 'ember-data';

const {Model, hasMany, attr} = DS;

export default Model.extend({
  name: attr(),
  shortName: attr(),
  shows: hasMany('show')
});
