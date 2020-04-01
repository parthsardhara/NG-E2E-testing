import { browser, logging } from 'protractor';
import { UserPortalPage } from '../Page-Object/user-portal.po';

describe('workspace-project UserPortalPage', () => {
    let userPortalPage: UserPortalPage;

    beforeEach(() => {
        userPortalPage = new UserPortalPage();
    });

    it('should display \'WELCOME IF\' on the user-portal page.', () => {
        userPortalPage.navigateTo('/user-portal/home');
        browser.sleep(2000);
        expect(userPortalPage.getBeforeClick()).toBe('welcome if');
    });

    it('should display \'WELCOME ELSE\' title on the user-portal page.', () => {
        userPortalPage.navigateTo('/user-portal/home');
        browser.sleep(2000);
        expect(userPortalPage.getAfterClick()).toBe('welcome else');
    });

    it('should display \'Show Table\' button on the user-portal page.', () => {
        userPortalPage.navigateTo('/user-portal/home');
        browser.sleep(2000);
        expect(userPortalPage.getShowTable()).toBe('Show Table');
    });

    it('should display \'Table\' on the user-portal page.', () => {
        userPortalPage.navigateTo('/user-portal/home');
        browser.sleep(2000);
        expect(userPortalPage.getDataTable()).toBeTruthy();
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry));
    });
});
