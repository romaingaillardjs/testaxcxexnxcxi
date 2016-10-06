'use strict';
/* Services */
angular.module('services', [])
.service('dataService', ['$http', function ($http) {
  this.getData = function(template) {
   return $http.get(''+template+'.json')
    .success(function (data) {
        return data;
    })
    .error(function(err) {
      console.log('error');
    })
  }
}])
