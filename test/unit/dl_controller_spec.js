describe('dl controlle', function() {

  var $scope;
  var controller;

  beforeEach(module('App'));

  beforeEach(inject(function($controller, $rootScope){
    $scope = $rootScope.$new();
    controller = $controller('DlCtrl', {$scope:$scope});
  }));

  it('should initialize object to be downloaded', function() {
    expect($scope.dlObj).toEqual({some:'message'});
  });

  it('should initialize link to downloaded', function() {
    var url = 'data:text/json;charset=utf8,'
      + encodeURIComponent('{"some":"message"}');
    expect($scope.getDLLink()).toEqual(url);
  });

  it('should have a link corresponding dlObj', function() {
    $scope.dlObj = {another: 'thing'};
    $scope.$digest();

    var url = 'data:text/json;charset=utf8,'
      + encodeURIComponent('{"another":"thing"}');
    expect($scope.getDLLink()).toEqual(url);
  });
});
