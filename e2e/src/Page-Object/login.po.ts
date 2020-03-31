import { browser, by, element } from 'protractor';

export class LoginPage {

    navigateTo(redirectTo) {
        return browser.get(redirectTo);
    }

    getTitleText() {
        return element(by.css('app-login .container h2')).getText();
    }

    getSubmitButtonText() {
        return element(by.id('loginFormSubmit')).getText();
    }

    setLoginFormValue() {
        browser.sleep(1000);
        element(by.id('loginFormUsername')).sendKeys('admin@gmail.com');
        browser.sleep(1000);
        element(by.id('loginFormPassword')).sendKeys('admin');
        browser.sleep(1000);
        element(by.id('loginFormSubmit')).click();
    }

    setLoginFormInvalidValue() {
        browser.sleep(1000);
        element(by.id('loginFormUsername')).sendKeys('admin');
        browser.sleep(1000);
        element(by.id('loginFormPassword')).sendKeys('');
        browser.sleep(1000);
        element(by.id('loginFormSubmit')).click();
    }

    setLoginFormEmptyValue() {
        browser.sleep(1000);
        element(by.id('loginFormUsername')).sendKeys('');
        browser.sleep(1000);
        element(by.id('loginFormPassword')).sendKeys('');
        browser.sleep(1000);
        element(by.id('loginFormSubmit')).click();
    }
    
    goToRegistrationPage(){
        browser.sleep(1000);
        element(by.id('goToRegistrationPage')).click();
        browser.sleep(1000);
    }
}
