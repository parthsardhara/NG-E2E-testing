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

    getSum() {
        element(by.id('openHomeModalButton')).click();
        browser.sleep(1000);
        element(by.id('additionFormNum1')).sendKeys(1);
        browser.sleep(1000);
        element(by.id('additionFormNum2')).sendKeys(3);
        browser.sleep(1000);
        element(by.id('additionFormSubmit')).click();
        browser.sleep(2000);
        return element(by.id('additionFormSum')).getAttribute('value');
    }

    showErroSum() {
        element(by.id('openHomeModalButton')).click();
        browser.sleep(1000);
        element(by.id('additionFormNum1')).sendKeys('a');
        browser.sleep(1000);
        element(by.id('additionFormNum2')).sendKeys(3);
        browser.sleep(1000);
        element(by.id('additionFormSubmit')).click();
    }

    closeSumModal() {
        element(by.id('openHomeModalButton')).click();
        browser.sleep(1000);
        element(by.id('closeTheModal')).click();
    }
}
