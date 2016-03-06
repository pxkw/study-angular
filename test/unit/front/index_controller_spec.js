describe('index controller', function() {
  var $scope;
  var controller;

  beforeEach(module('App'));

  beforeEach(inject(function($controller, $rootScope){
    $scope = $rootScope.$new();
    controller = $controller('IndexCtrl', {$scope:$scope});
  }));

  it('should have default message', function() {
    expect($scope.msg).toEqual('Working!');
  });
});
