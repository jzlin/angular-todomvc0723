import { AngularTodomvc0723Page } from './app.po';

describe('angular-todomvc0723 App', () => {
  let page: AngularTodomvc0723Page;

  beforeEach(() => {
    page = new AngularTodomvc0723Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
