angular.module('F1FeddrAppService',[]).
factory('API',function($http){

  var getApi={};
  getApi.getDrivers=function(){

  return $http({
   url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK',
   method:'JSONP'
  });
  }

  getApi.getDriverDetails=function(id){

return $http({
 method:'JSONP',
 url: 'http://ergast.com/api/f1/2013/drivers/'+ id +'/driverStandings.json?callback=JSON_CALLBACK'
})

  }

return getApi;
})
