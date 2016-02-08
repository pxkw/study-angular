describe('route', function() {
  var $state;

  beforeEach(module('App'));

  beforeEach( inject( function(_$state_){
    $state = _$state_;
  }));

  it('should be set correctly', function() {
    expect($state.href('home')).toEqual('#/');
    expect($state.href('help')).toEqual('#/help');
    expect($state.href('help.what')).toEqual('#/help/');
  });
});
