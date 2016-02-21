describe('Visitor', () => {
  beforeEach(() => {
    browser.get('/');
  });

  it('should be able to go to help page.', () => {
    element(by.linkText('Help(foo)')).click();
    expect($('.title').getText()).toEqual('Help!');
    element(by.linkText('Home')).click();
    expect($('.title').getText()).toEqual('Index');
  });


  it('should be able to download json.', (done) => {
    element(by.linkText('DL')).click();
    expect($('.title').getText()).toEqual('DL!');

    browser.ignoreSynchronization = true;

    element(by.linkText('Download JSON')).click().then( () => {
      expect($('html').getText()).toEqual('{"some":"message"}');

      browser.ignoreSynchronization = false;
      done();
    });
  });
});
