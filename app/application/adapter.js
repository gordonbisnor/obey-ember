import DS from 'ember-data';

export default DS.Adapter.extend({
  
  findRecord: function(store, type, id) {
    return this.data.filter(item=>item.id == id)[0];
  },
  
  findAll: function() {
    return this.data;
  }

});

