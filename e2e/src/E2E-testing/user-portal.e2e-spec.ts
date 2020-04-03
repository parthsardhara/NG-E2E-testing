import { browser, logging, element, by } from 'protractor';
import { UserPortalPage } from '../Page-Object/user-portal.po';

describe('workspace-project UserPortalPage', () => {
    let userPortalPage: UserPortalPage;

    beforeEach(() => {
        userPortalPage = new UserPortalPage();
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry));
    });
});
