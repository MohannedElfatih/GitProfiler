import { GitProfilePage } from './app.po';

describe('git-profile App', () => {
  let page: GitProfilePage;

  beforeEach(() => {
    page = new GitProfilePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
