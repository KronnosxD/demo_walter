import { DemoWalterPage } from './app.po';

describe('demo-walter App', () => {
  let page: DemoWalterPage;

  beforeEach(() => {
    page = new DemoWalterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
