var app = angular.module('App', ['ui.router']);

app.controller('IndexCtrl', function($scope, $state){
  $scope.msg = 'Working!';
});

app.controller('HelpCtrl', function($scope, $state){
  $scope.what = $state.params.what;
  if($scope.what){
    $scope.msg = 'About \'' + $scope.what + '\'.';
  }else{
    $scope.msg = 'Default message.';
  }
});

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {url: '/', controller:'IndexCtrl', templateUrl:'view/index.html'})
    .state('help', {url: '/help', controller:'HelpCtrl', templateUrl:'view/help.html'})
    .state('help.what', {url: '/:what', controller:'HelpCtrl', templateUrl:'view/help.html'});
});

