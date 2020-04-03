import { browser, logging, element, by } from 'protractor';
import { CurdPage } from '../Page-Object/crud.po';

describe('workspace-project Crud', () => {
  let curdPage: CurdPage;

  beforeEach(() => {
    curdPage = new CurdPage();
  });

  it('should render \'Add Employee\' button on the crud page.', () => {
    curdPage.navigateTo('/user-portal/crud');
    browser.sleep(2000);
    expect(curdPage.getAddEmployeeButtonText()).toEqual('Add Employee');
  });

  it('Should render \'Crud Table\' on the Crud page.', () => {
    browser.sleep(2000);
    expect(element(by.id('crudDataTable')).isPresent()).toBeTruthy();
  });

  it('Should render \'Edit your details\' on Crud page while edit the details of the employee.', () => {
    browser.sleep(2000);
    expect(curdPage.getEditYourDetailsText()).toContain('Edit your details');
    element(by.id('closeTheCrudModal')).click();
  });

  it('Should render \'Add your details\' on Crud page while add the details of the employee.', () => {
    browser.sleep(2000);
    expect(curdPage.getAddYourDetailsText()).toContain('Add your details');
    element(by.id('closeTheCrudModal')).click();
  });

  it('After add the employee dertails, Should render employee id, name and compnay name in the table on crud page.', () => {
    curdPage.addYourDetails();
    browser.sleep(1000);

    const td = element.all(by.tagName('tbody tr')).last();
    td.element(by.className('productName')).getText();

    expect(td.element(by.className('productId')).getText()).toContain('8');
    browser.sleep(1000);
    expect(td.element(by.className('productName')).getText()).toContain('Raju');
    browser.sleep(1000);
    expect(td.element(by.className('productCompany')).getText()).toContain('Bacancy');
  });

  it('Should render edited employee id, name and compnay name in the table on crud page.', () => {
    curdPage.editYourDetails();

    const td = element.all(by.tagName('tbody tr')).first();
    expect(td.element(by.className('productId')).getText()).toContain('1');
    browser.sleep(1000);
    expect(td.element(by.className('productName')).getText()).toContain('Rakesh');
    browser.sleep(1000);
    expect(td.element(by.className('productCompany')).getText()).toContain('Google');
  });

  it('Should not render deleted employee\'s details on the table.', () => {
    curdPage.deleteYourDetails();
    browser.sleep(1000);
    expect(element(by.id('crudDataId1')).isPresent()).toBeFalsy();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
