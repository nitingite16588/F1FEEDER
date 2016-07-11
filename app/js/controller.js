angular.module('F1FeddrAppController',[]).
controller('driverController',function($scope,API){
  $scope.driversList =[];
  $scope.nameFilter="";

API.getDriver().then(function successCallback(response) {

console.log(response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
  $scope.driversList=response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings

})


})
