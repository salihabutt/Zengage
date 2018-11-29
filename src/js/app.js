angular.module('ZengageApp', [
  'mobile-angular-ui',
  'ui.router',
  'ZengageApp.Controllers.Login',
  'ZengageApp.Controllers.Home'

])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
      url: '/',
      templateUrl: 'templates/home.html',
      abstract: true
    })
    .state('login', {
          url: '/login',
          templateUrl:'templates/login.html'
        })
          $urlRouterProvider.otherwise('login');
    });
