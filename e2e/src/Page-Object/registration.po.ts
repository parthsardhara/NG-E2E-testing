import { browser, by, element } from 'protractor';

export class RegistrationPage {

    navigateTo(redirectTo) {
        return browser.get(redirectTo);
    }

    getRegistrationPageTitleText() {
        return element(by.css('app-registration .container h2')).getText();
    }

    getSubmitButtonText() {
        return element(by.id('loginFormSubmit')).getText();
    }

    goToLoginPage() {
        browser.sleep(1000);
        element(by.id('goToLoginPage')).click();
        browser.sleep(1000);
    }

    setRegistrationFormValue() {
        browser.sleep(1000);
        element(by.id('registrationFormFirstname')).sendKeys('Parth');
        browser.sleep(1000);
        element(by.id('registrationFormLastname')).sendKeys('Sardhara');
        browser.sleep(1000);
        element(by.id('registrationFormEmail')).sendKeys('admin@gmail.com');
        browser.sleep(1000);
        element(by.id('registrationFormPasssword')).sendKeys('admin');
        browser.sleep(1000);
        element(by.id('registrationFormSubmit')).click();
    }

    setRegistrationFormEmptyValue() {
        browser.sleep(1000);
        element(by.id('registrationFormFirstname')).sendKeys('');
        browser.sleep(1000);
        element(by.id('registrationFormLastname')).sendKeys('');
        browser.sleep(1000);
        element(by.id('registrationFormEmail')).sendKeys('');
        browser.sleep(1000);
        element(by.id('registrationFormPasssword')).sendKeys('');
        browser.sleep(1000);
        element(by.id('registrationFormSubmit')).click();
    }

    setRegistrationFormInvalidValue() {
        browser.sleep(1000);
        element(by.id('registrationFormFirstname')).sendKeys('Parth');
        browser.sleep(1000);
        element(by.id('registrationFormLastname')).sendKeys('');
        browser.sleep(1000);
        element(by.id('registrationFormEmail')).sendKeys('');
        browser.sleep(1000);
        element(by.id('registrationFormPasssword')).sendKeys('admin');
        browser.sleep(1000);
        element(by.id('registrationFormSubmit')).click();
    }
}
