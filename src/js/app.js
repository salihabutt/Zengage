angular.module('ZengageApp', [
  'ngRoute',
  'mobile-angular-ui',
  'ZengageApp.controllers.Main',
  'ZengageApp.controllers.Login'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'login.html',  reloadOnSearch: false});
});
