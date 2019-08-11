app.controller('RadioController',function($scope,AppService){
	//$scope.rating="4.5";
	//$scope.comment="Give VerbalComment";
	$scope.submit=function(){
		$scope.name2=$scope.rating+$scope.comment;
		console.log("scope is "+$scope.name2);
	};
});