import { browser, by, element } from 'protractor';

export class HomePage {

    navigateTo(redirectTo) {
        return browser.get(redirectTo);
    }

    getBeforeClick() {
        browser.sleep(1000);
        return element(by.id('welcomeIf')).getText();
    }

    getAfterClick() {
        browser.sleep(1000);
        element(by.id('afterClick')).click();
        browser.sleep(1000);
        return element(by.id('welcomeElse')).getText();
    }
    
    getModalTitleText() {
        element(by.id('openHomeModalButton')).click();
        browser.sleep(1000);
        return element(by.id('homePageTitle')).getText();
    }

    getSum() {
        element(by.id('additionFormNum1')).sendKeys(1);
        browser.sleep(1000);
        element(by.id('additionFormNum2')).sendKeys(3);
        browser.sleep(1000);
        element(by.id('additionFormSubmit')).click();
        browser.sleep(2000);
        return element(by.id('additionFormSum')).getAttribute('value');
    }

    showErroSum() {
        element(by.id('closeTheModal')).click();
        browser.sleep(1000);
        element(by.id('openHomeModalButton')).click();
        browser.sleep(1000);
        element(by.id('additionFormNum1')).sendKeys('a');
        browser.sleep(1000);
        element(by.id('additionFormNum2')).sendKeys(3);
        browser.sleep(1000);
        element(by.id('additionFormSubmit')).click();
    }

    closeSumModal() {
        browser.sleep(1000);
        element(by.id('closeTheModal')).click();
    }
}
