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
        element(by.id('loginFormUsername')).sendKeys('admin');
        element(by.id('loginFormPassword')).sendKeys('admin');
        element(by.id('loginFormSubmit')).click();
    }
}
