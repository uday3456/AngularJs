app=angular.module('AppModule',['ui.router']);
app.config(function($stateProvider){
	$stateProvider
	.state('radioBinding',{
		url:'/radioBinding',
		templateUrl:'view/radioBinding.html',
		controller:'RadioController'
		
	});
	$stateProvider
	.state('app',{
		url:'/',
		template:'{{test}}',
		controller:'AppController'
		
	});
	
})