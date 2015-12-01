angular.module('userApp',
	['ngAnimate', 'app.routes', 'mainCtrl', 'userCtrl', 'shipCtrl', 'authService', 'userService']
)
.config(function($httpProvider) {

  $httpProvider.interceptors.push('AuthInterceptor');
});
