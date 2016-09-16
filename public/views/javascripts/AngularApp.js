var AngularApp = angular.module("AngularApp",['ui.router','ngAnimate']);

AngularApp.config(function($stateProvider)
{

    $stateProvider
        .state('Home', {

            url: '/Home',
            templateUrl: 'Home/Home.ejs',
			controller: 'HomeController'

        }).state('AboutMe', {
            url: '/AboutMe',
            templateUrl: 'AboutMe/AboutMe.ejs',
			controller: 'AboutMeController'
        }).state('MyProjects', {
            url: '/MyProjects',
            templateUrl: 'MyProjects/MyProjects.ejs',
			controller: 'MyProjectsController'
        }).state('Blog', {
            url: '/Blog',
            templateUrl: 'Blog/Blog.ejs',
			controller: 'BlogController'
        })



});


AngularApp.directive('modal', function () {
    return {
      template: '<div style = "top:50px;" class="modal fade" role = "dialog">' + 
          '<div class="modal-dialog modal-lg">' + 
            '<div class="modal-content">' + 
              '<div class="modal-header">' + 
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' + 
                '<h4 style = "color:black;" class="modal-title">{{ imageTitle }}</h4>' + 
              '</div>' + 
              '<div class="modal-body"> <img  ng-src="{{ imageLocation }}" style = "width:100%;height:100%;"></div>' + 
            '</div>' + 
          '</div>' + 
        '</div>',
      restrict: 'E',
      replace:true,
      scope:true,
      link: function postLink(scope, element, attrs) {
          scope.$watch(attrs.visible, function(value){
          if(value == true)
            $(element).modal('show');
          else
            $(element).modal('hide');
        });

        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
          });
        });

        $(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = false;
          });
        });
      }
    };
  });

AngularApp.run(function($state) 
{
	$state.go('Home');
	
});

