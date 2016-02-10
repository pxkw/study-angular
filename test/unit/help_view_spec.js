describe('help view', function() {
  var $scope;

  beforeEach(module('App'));
  beforeEach(module('templates'));

  beforeEach(inject(function($rootScope, injectTemplate){
    $scope = $rootScope.$new();
    injectTemplate('view/help.html', $scope);
  }));

  it('should show title', function() {
    var title = $('.title');
    expect(title.text()).toEqual('Help!');
  });

  it('should show $scope.msg as a message', function() {
    $scope.msg = "this is what";
    $scope.$digest();

    var msg = $('.msg');
    expect(msg.text()).toEqual('this is what');
  });

  it('should have a link to home', function() {
    var link = $('.link');
    expect(link.text()).toEqual('home');
    expect(link.attr('href')).toEqual('#/');
  });
});
