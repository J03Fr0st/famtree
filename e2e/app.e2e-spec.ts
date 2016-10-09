import { FamtreePage } from './app.po';

describe('famtree App', function() {
  let page: FamtreePage;

  beforeEach(() => {
    page = new FamtreePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
