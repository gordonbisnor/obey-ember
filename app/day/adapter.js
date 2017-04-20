import ApplicationAdapter from 'obey-ember/application/adapter';

export default ApplicationAdapter.extend({

  data: [
    {"id": 1, "name": "Thursday", "shows": [1,2,3,4,5]},
    {"id": 2, "name": "Friday",   "shows": [6,7,8,9,10,11]},
    {"id": 3, "name": "Saturday", "shows": [12,13,14,15,16,17]},
    {"id": 4, "name": "Sunday",   "shows": [18,19,20,21,22]}
  ]

});
