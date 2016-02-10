describe('index view', function() {
  var $scope;

  beforeEach(module('App'));
  beforeEach(module('templates'));

  beforeEach(inject(function($compile, $rootScope, injectTemplate){
    $scope = $rootScope.$new();
    injectTemplate('view/index.html', $scope);
  }));

  it('should show a title', function() {
     var title = $('.title');
     expect(title.text()).toEqual('Index');
  });

  it('should show $scope.msg as a message', function() {
    $scope.msg = 'Can you see me?';
    $scope.$digest();

    var msg = $('.msg');
    expect(msg.text()).toEqual('Can you see me?');
  });

  it('should have 3 links to help,help(foo) and help(bar)', function() {
    var link = $('.link');
    expect(link.eq(0).text()).toEqual('help');
    expect(link.eq(1).text()).toEqual('help(foo)');
    expect(link.eq(2).text()).toEqual('help(bar)');
    expect(link.eq(0).attr('href')).toEqual('#/help');
    expect(link.eq(1).attr('href')).toEqual('#/help/foo');
    expect(link.eq(2).attr('href')).toEqual('#/help/bar');
  });
});
