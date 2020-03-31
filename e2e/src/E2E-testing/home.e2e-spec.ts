import { browser, logging } from 'protractor';
import { HomePage } from '../Page-Object/home.po';

describe('workspace-project Home', () => {
  let homePage: HomePage;

  beforeEach(() => {
    homePage = new HomePage();
  });

  it('should display \'Home page\' title on the Home page.', () => {
    homePage.navigateTo('/user-portal/home');
    browser.sleep(2000);
    expect(homePage.getModalTitleText()).toEqual('Home page');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
