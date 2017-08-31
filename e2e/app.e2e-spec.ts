import { AngularParentPage } from './app.po';

describe('angular-parent App', () => {
  let page: AngularParentPage;

  beforeEach(() => {
    page = new AngularParentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
