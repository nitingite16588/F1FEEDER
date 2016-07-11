'use strict';

// Declare app level module which depends on views, and components
angular.module('F1FeederApp', [
  'F1FeddrAppController',
  'F1FeddrAppService',
  'ngRoute'
]).
config(['$locationProvider','$routeProvider',function($locationProvider,$routeProvider)
{


$routeProvider.otherwise({redirectTo: '/drivers'})

.when('/drivers',{

templateUrl:"partials/drivers.html",
controller:"driversController"

}).
when('/driver/:id',{
templateUrl:"partials/driver.html",
controller:"driverController"
});

}
]);
