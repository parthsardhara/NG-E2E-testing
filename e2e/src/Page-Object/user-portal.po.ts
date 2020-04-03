import { browser } from 'protractor';

export class UserPortalPage {

    navigateTo(redirectTo) {
        return browser.get(redirectTo);
    }

}
