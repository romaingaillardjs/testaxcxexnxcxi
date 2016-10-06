angular.module('controllers',[])

.controller('MainCtrl',['$scope','dataService', '$mdSidenav','$location',function($scope,dataService, $mdSidenav,$location) {
  
  // Load all view data
  dataService.getData('user').then(function (data) {
    $scope.users = angular.fromJson(data.data);
    console.log($scope.users)
  }) 

  $scope.change = function (argument) {
    $scope.path = argument
    }
  $scope.toggleList = function (side){
    if (side=='left') {
      $mdSidenav('right').close();
      $mdSidenav(side).toggle();};
    
    if (side=='right') {
      $mdSidenav('left').close();
      $mdSidenav(side).toggle();};
    };
 
}])
.controller('GamingCupCtrl',['$scope','dataService', '$mdSidenav','$location',function($scope,dataService, $mdSidenav,$location) {

  dataService.getData('gamingCup').then(function (data) {
    $scope.gamingCup = angular.fromJson(data.data);
  })  
}])
.controller('CodingCupCtrl',['$scope','dataService', '$mdSidenav','$location',function($scope,dataService, $mdSidenav,$location) {

   dataService.getData('codingCup').then(function (data) {
    $scope.codingCup = angular.fromJson(data.data);
  }) 
}])
.controller('StreamingCtrl',['$scope','dataService', '$mdSidenav','$location',function($scope,dataService, $mdSidenav,$location) {

   dataService.getData('streaming').then(function (data) {
    $scope.streaming = angular.fromJson(data.data);
  }) 
}]) 
.controller('ContactCtrl',['$scope','dataService', '$mdSidenav','$location',function($scope,dataService, $mdSidenav,$location) {
  
   dataService.getData('contact').then(function (data) {
    $scope.contact = angular.fromJson(data.data);
  }) 
}]) 
.controller('PartenairesCtrl',['$scope','dataService', '$mdSidenav','$location',function($scope,dataService, $mdSidenav,$location) {
  
   dataService.getData('partenaires').then(function (data) {
    $scope.partenaires = angular.fromJson(data.data);
  }) 
}]) 
.controller('FAQCtrl',['$scope','$mdSidenav','$sce','$sanitize','dataService',function($scope,$mdSidenav,$sce,$sanitize,dataService) {
  // Load all view data
  dataService.getData('faq').then(function (data) {
    $scope.FAQ = angular.fromJson(data.data);
  })         
  $scope.renderHtml = function (htmlCode) {
    return $sce.trustAsHtml(htmlCode);
  };
}]);
