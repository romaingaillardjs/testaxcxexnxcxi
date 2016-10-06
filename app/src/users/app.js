
 angular.module('myApp', 
  
              [ 'ngMaterial',
                'ngRoute',
                'ngSanitize',
                'ngAnimate',
                'controllers',
                'filters',
                'services',
                'directives'  
              ])

.config(['$routeProvider', '$locationProvider','$mdIconProvider','$mdThemingProvider',function($routeProvider, $locationProvider,$mdIconProvider,$mdThemingProvider) {
  $mdIconProvider
    .defaultIconSet("../app/assets/svg/avatars.svg", 128)
    .icon("menu", "../app/assets/svg/menu.svg", 24)
    .icon("share", "../app/svg/share.svg", 24)
    .icon("google_plus", "../app/assets/svg/google_plus.svg", 512)
    .icon("hangouts", "../app/assets/svg/hangouts.svg", 512)
    .icon("twitter", "../app/assets/svg/twitter.svg", 512)
    .icon("phone", "../app/assets/svg/phone.svg", 512);

  $mdThemingProvider
    .theme('default')
    .primaryPalette('brown').accentPalette('red');


  $routeProvider
    .when('/Gaming cup', {
      templateUrl: 'src/users/view/GamingCup.html',
      controller: 'GamingCupCtrl',
      controllerAs:'toto'
    })
     .when('/Coding cup', {
      templateUrl: 'src/users/view/CodingCup.html',
      controller: 'CodingCupCtrl'
    })
      .when('/Streaming VOD', {
      templateUrl: 'src/users/view/Streaming.html',
      controller: 'StreamingCtrl'
    })
      .when('/Contacts', {
      templateUrl: 'src/users/view/Contacts.html',
      controller: 'ContactsCtrl'
    })
      .when('/FAQ', {
      templateUrl: 'src/users/view/FAQ.html',
      controller: 'FAQCtrl'
    })

    .otherwise({
      redirectTo: '/Gaming cup'
    });
}])
