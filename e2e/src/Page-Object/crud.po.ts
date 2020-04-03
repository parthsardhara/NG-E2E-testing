import { browser, by, element } from 'protractor';

export class CurdPage {

    navigateTo(redirectTo) {
        return browser.get(redirectTo);
    }

    getAddEmployeeButtonText() {
        return element(by.id('addEmployeeButton')).getText();
    }

    getEditYourDetailsText() {
        element(by.id('edit1')).click();
        browser.sleep(1000);
        return element(by.id('editYourDetails')).getText();
    }

    getAddYourDetailsText() {
        element(by.id('addEmployeeButton')).click();
        browser.sleep(1000);
        return element(by.id('addYourDetails')).getText();
    }

    addYourDetails() {
        const addEmployeeList = [
            { name: 'Kamlesh', company: 'Bacancy' },
            { name: 'Pratik', company: 'Bacancy' },
            { name: 'Raju', company: 'Bacancy' },
        ];
        addEmployeeList.forEach(a => {
            element(by.id('addEmployeeButton')).click();
            browser.sleep(1000);
            element(by.id('editCrudDataFormName')).sendKeys(a.name);
            browser.sleep(1000);
            element(by.id('editCrudDataFormCompany')).sendKeys(a.company);
            browser.sleep(1000);
            element(by.id('editCrudDataFormSubmit')).click();
        });
    }

    editYourDetails() {
        const td = element.all(by.tagName('tbody tr')).first();
        td.element(by.className('productEdit')).click();
        browser.sleep(1000);
        element(by.id('editCrudDataFormName')).clear();
        browser.sleep(1000);
        element(by.id('editCrudDataFormName')).sendKeys('Rakesh');
        browser.sleep(1000);
        element(by.id('editCrudDataFormCompany')).clear();
        browser.sleep(1000);
        element(by.id('editCrudDataFormCompany')).sendKeys('Google');
        browser.sleep(1000);
        element(by.id('editCrudDataFormSubmit')).click();
    }

    deleteYourDetails() {
        const td = element.all(by.tagName('tbody tr')).first();
        browser.sleep(1000);
        td.element(by.className('productDelete')).click();
    }
}
