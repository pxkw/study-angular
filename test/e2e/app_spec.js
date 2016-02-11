describe('Visitor', () => {
  beforeEach(() => {
    browser.get('/');
  });

  it('should be able to go to help page.', () => {
    element(by.linkText('help(foo)')).click();
    expect($('.title').getText()).toEqual('Help!');
    expect($('.msg').getText()).toEqual('About \'foo\'.');
    element(by.linkText('home')).click();
    expect($('.title').getText()).toEqual('Index');
  });
});
