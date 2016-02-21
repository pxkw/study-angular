describe('dl view', function() {
  var $scope;

  beforeEach(module('App'));
  beforeEach(module('templates'));

  beforeEach(inject(function($compile, $rootScope, injectTemplate){
    $scope = $rootScope.$new();
    injectTemplate('view/dl.html', $scope);
  }));

  it('should show title', function() {
    expect($('.title').text()).toEqual('DL!');
  });

  it('should show $scope.dlObj', function() {
    $scope.dlObj = {another: 'messages'};
    $scope.$digest();
    expect($('.obj-state').text()).toEqual('{"another":"messages"}');
  });

  it('should has a link to download object', function() {
    $scope.getDLLink = function(){ return 'somelink'; };
    $scope.$digest();
    expect($('.dl-link').attr('href')).toEqual('somelink');
  });
});

