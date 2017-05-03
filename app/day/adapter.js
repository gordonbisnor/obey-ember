import ApplicationAdapter from 'obey-ember/application/adapter';

export default ApplicationAdapter.extend({

  data: [
    {"id": 1, "name": "Thursday", "shortName": "T",  "shows": [1,2,3,4,5]},
    {"id": 2, "name": "Friday",   "shortName": "F",  "shows": [6,7,8,9,10,11]},
    {"id": 3, "name": "Saturday", "shortName": "S",  "shows": [12,13,14,15,16,17]},
    {"id": 4, "name": "Sunday",   "shortName": "S",  "shows": [18,19,20,21,22]}
  ]

});
