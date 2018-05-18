import ApplicationAdapter from 'obey-ember/application/adapter';

export default ApplicationAdapter.extend({

  data: [
    {"id": 1, "name": "Thursday", "shortName": "T",  "shows": [1,2,3]},
    {"id": 2, "name": "Friday",   "shortName": "F",  "shows": [4,5,6,7]},
    {"id": 3, "name": "Saturday", "shortName": "S",  "shows": [8,9,10,11,12,13,14]},
    {"id": 4, "name": "Sunday",   "shortName": "S",  "shows": [15,16,17,18,19]}
  ]

});
