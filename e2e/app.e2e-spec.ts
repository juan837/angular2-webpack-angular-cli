import { MiWebPage } from './app.po';

describe('mi-web App', function() {
  let page: MiWebPage;

  beforeEach(() => {
    page = new MiWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
