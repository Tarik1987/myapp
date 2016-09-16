AngularApp.controller('MyProjectsController',['$scope','MyProjectsFactory', function($scope,MyProjectsFactory) {
    $scope.pageClass = 'page-projects';
	
	
	$scope.Companies = [];
	
    MyProjectsFactory.GetCompanies().then(function(result)
   {
    console.log(result);
	angular.forEach(result,function(item) 
	{
		$scope.Companies.push(item);
	});
	  
  });
	
}]);