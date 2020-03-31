import { browser, logging } from 'protractor';
import { RegistrationPage } from '../Page-Object/registration.po';

describe('workspace-project App', () => {
  let registrationPage: RegistrationPage;

  beforeEach(() => {
    registrationPage = new RegistrationPage();
  });

  it('Should display \'Registration Form\' title on the registration page.', () => {
    registrationPage.navigateTo('/registration');
    expect(registrationPage.getRegistrationPageTitleText()).toEqual('Registration Form');
  });

  it('Shold redirect to login page.', () => {
    registrationPage.navigateTo('/registration');
    browser.sleep(1000);
    registrationPage.goToLoginPage();
    expect(browser.getCurrentUrl()).toContain('/login');
  });

  it('Should redirect to the home page.', () => {
    registrationPage.navigateTo('/registration');
    browser.sleep(1000);
    registrationPage.setRegistrationFormValue();
    browser.sleep(2000);
    expect(browser.getCurrentUrl()).toContain('/login');
  });

  it('If all the field is empty then it should stay on registration page.', () => {
    registrationPage.navigateTo('/registration');
    browser.sleep(1000);
    registrationPage.setRegistrationFormEmptyValue();
    browser.sleep(2000);
    expect(browser.getCurrentUrl()).toContain('/registration');
  });

  it('If form is not valid then it should stay on registration page.', () => {
    registrationPage.navigateTo('/registration');
    browser.sleep(1000);
    registrationPage.setRegistrationFormInvalidValue();
    browser.sleep(2000);
    expect(browser.getCurrentUrl()).toContain('/registration');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
