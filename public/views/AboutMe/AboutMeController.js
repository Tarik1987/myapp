AngularApp.controller('AboutMeController',['$scope','AboutMeFactory', function($scope,AboutMeFactory) {
    
 $scope.pageClass = 'page-about';
 $scope.showModal = false;
 $scope.imageLocation = "";
 $scope.imageTitle = "";

  AboutMeFactory.GetParagraphs().then(function(result)
  {
	  
	$scope.MainParagraphText = result[0].MainParagraphText;
	$scope.SecondParagraphText = result[0].SecondParagraphText_A + _GetMyAge('1987-10-30') + result[0].SecondParagraphText_B
	$scope.ThirdParagraphText = result[0].ThirdParagraphText;
	$scope.FourthParagraphText = result[0].FourthParagraphText;
	$scope.FifthParagraphText = result[0].FifthParagraphText;
	  
  });

 $scope.toggleModal = function(locImageLocation,txtImageTitle)
 {
    $scope.showModal = !$scope.showModal;
    $scope.imageTitle = txtImageTitle;
    $scope.imageLocation = locImageLocation;
 };
	
 function _GetMyAge(_birthday)
 {
   var birthdayObject = new Date(_birthday);	 

   var difference = Date.now() - birthdayObject.getTime();
   var ageDate = new Date(difference);
		
    return Math.abs(ageDate.getUTCFullYear() - 1970);
		
}
	
}]);