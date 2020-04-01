import { browser, by, element } from 'protractor';

export class UserPortalPage {

    navigateTo(redirectTo) {
        return browser.get(redirectTo);
    }

    getDataTable() {
        element(by.id('showTable')).click();
        browser.sleep(2000);
        return element(by.id('jsonPlaceholderDataTable')).getText();
    }

    getBeforeClick(){
        browser.sleep(1000);
        return element(by.id('welcomeIf')).getText();
    }

    getShowTable(){
        browser.sleep(1000);
        return element(by.id('showTable')).getText();
    }

    getAfterClick(){
        browser.sleep(1000);
        element(by.id('afterClick')).click();
        browser.sleep(1000);
        return element(by.id('welcomeElse')).getText();
    }

}
