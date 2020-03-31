import { browser, by, element } from 'protractor';

export class HomePage {

    navigateTo(redirectTo) {
        return browser.get(redirectTo);
    }

    getModalTitleText() {
        element(by.id('openHomeModalButton')).click();
        browser.sleep(1000);
        return element(by.id('homePageTitle')).getText();
    }
}
