import { browser, by, element } from 'protractor';

export class LoginPage {

    navigateTo(redirectTo) {
        return browser.get(redirectTo);
    }

    getTitleText() {
        return element(by.css('app-login .container h2')).getText();
    }

    getSubmitButtonText() {
        return element(by.id('loginFormTemplateSubmitButton')).getText();
    }

    setLoginFormValue() {
        browser.sleep(1000);
        element(by.id('loginFormTemplateEmail')).sendKeys('admin@gmail.com');
        browser.sleep(1000);
        element(by.id('loginFormTemplatePassword')).sendKeys('admin');
        browser.sleep(1000);
        element(by.id('loginFormTemplateSubmitButton')).click();
    }

    setLoginFormInvalidValue() {
        browser.sleep(1000);
        element(by.id('loginFormTemplateEmail')).sendKeys('admin');
        browser.sleep(1000);
        element(by.id('loginFormTemplatePassword')).sendKeys('');
        browser.sleep(1000);
        element(by.id('loginFormTemplateSubmitButton')).click();
    }

    setLoginFormEmptyValue() {
        browser.sleep(1000);
        element(by.id('loginFormTemplateEmail')).sendKeys('');
        browser.sleep(1000);
        element(by.id('loginFormTemplatePassword')).sendKeys('');
        browser.sleep(1000);
        element(by.id('loginFormTemplateSubmitButton')).click();
    }
    
    goToRegistrationPage(){
        browser.sleep(1000);
        element(by.id('goToRegistrationPage')).click();
        browser.sleep(1000);
    }
}
