describe('help controller', function() {
  var $scope;
  var controller;

  beforeEach(module('App'));

  describe('when initialized with no state params', function() {
    beforeEach(inject(function($controller, $rootScope){
      $scope = $rootScope.$new();
      controller = $controller('HelpCtrl', {$scope:$scope});
    }));

    it('should have default message', function() {
      expect($scope.msg).toEqual('Default message.');
    });
  });

  describe('when initialized with state params', function() {
    beforeEach(inject(function($controller, $rootScope){
      $scope = $rootScope.$new();
      var $state = {params: {what: 'This is what'} };
      controller = $controller('HelpCtrl', {$scope:$scope, $state:$state});
    }));

    it('should have a message about what given in state param', function() {
      expect($scope.msg).toEqual('About \'This is what\'.');
    });
  });
});
