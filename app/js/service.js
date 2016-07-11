angular.module('F1FeddrAppService',[]).
factory('API',function($http){

  var getApi={};
  getApi.getDriver=function(){

  return $http({
   url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK',
   method:'JSONP'
  });
  }

return getApi;
})
