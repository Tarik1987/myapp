AngularApp.controller('NavigationController',['$scope','NavigationFactory',function ($scope,NavigationFactory)
{
	
	$scope.NavigationItems = [];

NavigationFactory.GetMenu().then(function(result) {
	console.log(result);
	angular.forEach(result,function(item) 
	{
		$scope.NavigationItems.push(item);
	});
	
});

$scope.Title = "Tarikova aplikacija";
}]);