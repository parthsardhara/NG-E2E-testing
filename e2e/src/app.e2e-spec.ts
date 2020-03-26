import { browser, logging } from 'protractor';
import { LoginPage } from './login.po';

describe('workspace-project App', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

  it('should display \'Login Form\' title on the login page.', () => {
    page.navigateTo('/login');
    expect(page.getTitleText()).toEqual('Login Form');
  });

  it('Should redirect to the login page.', () => {
    page.navigateTo('/login');
    browser.sleep(2000);
    page.setLoginFormValue();
    browser.sleep(2000);
    expect(browser.getCurrentUrl()).toContain('/home');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
