import { browser, logging } from 'protractor';
import { LoginPage } from './login.po';
import { RegistrationPage } from './registration.po';

describe('workspace-project App', () => {
  let loginPage: LoginPage;
  let registrationPage: RegistrationPage;

  beforeEach(() => {
    loginPage = new LoginPage();
    registrationPage = new RegistrationPage();
  });

  it('should display \'Login Form\' title on the login page.', () => {
    loginPage.navigateTo('/login');
    expect(loginPage.getTitleText()).toEqual('Login Form');
  });

  it('Should redirect to the home page.', () => {
    loginPage.navigateTo('/login');
    browser.sleep(1000);
    loginPage.setLoginFormValue();
    browser.sleep(2000);
    expect(browser.getCurrentUrl()).toContain('/home');
  });

  it('If form is not valid then it should stay on login page.', () => {
    loginPage.navigateTo('/login');
    browser.sleep(1000);
    loginPage.setLoginFormInvalidValue();
    browser.sleep(2000);
    expect(browser.getCurrentUrl()).toContain('/login');
  });

  it('If username and password is empty then it should stay on login page.', () => {
    loginPage.navigateTo('/login');
    browser.sleep(1000);
    loginPage.setLoginFormEmptyValue();
    browser.sleep(2000);
    expect(browser.getCurrentUrl()).toContain('/login');
  });

  it('Shold redirect to registration page.', () => {
    loginPage.navigateTo('/login');
    browser.sleep(1000);
    loginPage.goToRegistrationPage();
    expect(browser.getCurrentUrl()).toContain('/registration');
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
