import { browser, by, element } from 'protractor';

export class ApiPage {

    navigateTo(redirectTo) {
        return browser.get(redirectTo);
    }

    getShowTable() {
        browser.sleep(1000);
        return element(by.id('showTable')).getText();
    }

    getDataTable() {
        element(by.id('showTable')).click();
        browser.sleep(2000);
        return element(by.id('jsonPlaceholderDataTable')).getText();
    }

}
