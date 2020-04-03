import { browser, logging, element, by } from 'protractor';
import { HomePage } from '../Page-Object/home.po';

describe('workspace-project Home', () => {
  let homePage: HomePage;

  beforeEach(() => {
    homePage = new HomePage();
  });

  it('should display \'WELCOME IF\' on the Home page.', () => {
    homePage.navigateTo('/user-portal/home');
    browser.sleep(2000);
    expect(homePage.getBeforeClick()).toBe('welcome if');
  });

  it('should display \'WELCOME ELSE\' title on the Home page.', () => {
    homePage.navigateTo('/user-portal/home');
    browser.sleep(2000);
    expect(homePage.getAfterClick()).toBe('welcome else');
  });

  it('should display \'Home page\' title on the Home page.', () => {
    homePage.navigateTo('/user-portal/home');
    browser.sleep(2000);
    expect(homePage.getModalTitleText()).toEqual('Home page');
  });

  it('should display Sum of num1 and num2 in the modal.', () => {
    homePage.navigateTo('/user-portal/home');
    browser.sleep(2000);
    expect(homePage.getSum()).toBe('4');
  });

  it('should display error for num1 validation in the modal.', () => {
    homePage.navigateTo('/user-portal/home');
    browser.sleep(2000);
    homePage.showErroSum();
    browser.sleep(2000);
    expect(element(by.id('additionFormNum1Error')).getText()).toContain('Please enter number only');
  });

  it('should close the modal.', () => {
    homePage.navigateTo('/user-portal/home');
    browser.sleep(2000);
    homePage.closeSumModal();
    browser.sleep(2000);
    expect(element(by.id('closeTheModal')).isPresent()).toBeFalsy();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
