AngularApp.factory('NavigationFactory',['$http',function($http){
	
	var _NavigationFactory = {};
	var _ApiBase = '//localhost:3000/api';
	
	
	function _GetMenu()
    {

        return $http.get(_ApiBase + "/GetMenu").then(handleSuccess, handleError('There was an error getting Menu items.'));
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
	
	_NavigationFactory.GetMenu = _GetMenu;
	
	return _NavigationFactory;
	
	
	
}]);