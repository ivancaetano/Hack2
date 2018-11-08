import { HackPage } from './app.po';

describe('hack App', function() {
  let page: HackPage;

  beforeEach(() => {
    page = new HackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
