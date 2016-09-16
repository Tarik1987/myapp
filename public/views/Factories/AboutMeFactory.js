AngularApp.factory('AboutMeFactory',['$http',function($http){
	
	var _AboutMeFactory = {};
	var _ApiBase = '//localhost:3000/api';
	
	
	function _GetParagraphs()
    {

        return $http.get(_ApiBase + "/GetAboutMe").then(handleSuccess, handleError('There was an error getting AboutMe page paragraphs.'));
    }
	
	function handleSuccess(res) 
	{
		
        return res.data;

    }

    function handleError(error) 
	{

        return function () 
		{
            return {success: false, message: error};
        };
    }
	
	_AboutMeFactory.GetParagraphs = _GetParagraphs;
	
	return _AboutMeFactory;
	
	
	
}]);