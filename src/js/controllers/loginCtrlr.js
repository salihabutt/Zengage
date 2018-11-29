angular.module('ZengageApp.Controllers.Login', ['ZengageApp.Models.Login'])
.controller('loginCtrlr', function(loginModel){
  var self = this,
	init = function () {
    self.loginData = loginModel;
  }
  init();
});
