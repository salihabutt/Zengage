angular.module('ZengageApp', [
  'ngRoute',
  'mobile-angular-ui',
  'ZengageApp.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});