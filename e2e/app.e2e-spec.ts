import { ParikshaWebuiPage } from './app.po';

describe('pariksha-webui App', () => {
  let page: ParikshaWebuiPage;

  beforeEach(() => {
    page = new ParikshaWebuiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
