angular.module('F1FeddrAppController',[]).
controller('driversController',function($scope,API){
  $scope.driversList =[];
  $scope.nameFilter="";

API.getDrivers().then(function successCallback(response) {

console.log(response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
  $scope.driversList=response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;

})
}).
controller('driverController',function($scope,API,$routeParams){

$scope.id=$routeParams.id;
$scope.races=[];
$scope.driver=null;
API.getDriverDetails($scope.id).then(function successCallback(response) {

  //console.log(respons);
$scope.driver=response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];

console.log($scope.driver);
});
});
