import { PokerrankPage } from './app.po';

describe('pokerrank App', function() {
  let page: PokerrankPage;

  beforeEach(() => {
    page = new PokerrankPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
