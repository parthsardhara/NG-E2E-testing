import { browser, logging } from 'protractor';
import { ApiPage } from '../Page-Object/api.po';

describe('workspace-project Api', () => {
  let apiPage: ApiPage;

  beforeEach(() => {
    apiPage = new ApiPage();
  });

  it('should display \'Show Table\' button on the API page.', () => {
    apiPage.navigateTo('/user-portal/api');
    browser.sleep(2000);
    expect(apiPage.getShowTable()).toBe('Show Table');
  });

  it('should display \'Table\' on the API page.', () => {
    apiPage.navigateTo('/user-portal/api');
    browser.sleep(2000);
    expect(apiPage.getDataTable()).toBeTruthy();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
