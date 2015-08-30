angular.module('App', ['ngRoute'])

.controller('IndexCtrl', function($scope){
  $scope.msg = 'Working!';
})

.controller('HelpCtrl', function($scope, $routeParams){
  $scope.what = $routeParams.what;
  if($scope.what){
    $scope.msg = 'About \'' + $scope.what + '\'.';
  }else{
    $scope.msg = 'Default message.';
  }
})

.config(function($routeProvider){
  $routeProvider
    .when('/', {controller:'IndexCtrl', templateUrl:'view/index.html'})
    .when('/help', {controller:'HelpCtrl', templateUrl:'view/help.html'})
    .when('/help/:what', {controller:'HelpCtrl', templateUrl:'view/help.html'})
    .otherwise({redirectTo:'/'});
});

