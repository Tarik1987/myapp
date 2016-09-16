AngularApp.factory('MyProjectsFactory',['$http',function($http){
	
	var _MyProjectsFactory = {};
	var _ApiBase = '//localhost:3000/api';
	
	
	function _GetCompanies()
    {

        return $http.get(_ApiBase + "/GetCompanies").then(handleSuccess, handleError('There was an error getting AboutMe page paragraphs.'));
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
	
	_MyProjectsFactory.GetCompanies = _GetCompanies;
	
	return _MyProjectsFactory;
	
	
	
}]);