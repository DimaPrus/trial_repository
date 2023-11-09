import AlertsPage from "../../support/pageObjects/AlertsPage";

describe('Working with alerts', () => {
    let alertsPage;

    beforeEach(() => {
        alertsPage = new AlertsPage();
        alertsPage.alertsPageNavigation();
    });

    it('Basic alert test', () => {
        alertsPage.basicAlert();

    });

    it('Verify delayed alert showing', () => {
        alertsPage.delayedAlert();
    });

    it('Confirm the alert', () => {
        alertsPage.confirmAlert(true, 'Ok');
    });

    it('Cancel the alert', () => {
        alertsPage.confirmAlert(false, 'Cancel');
    });

    it('Working with prompt', () => {
        alertsPage.promptSuccess();
    });

    it('Cancel the appeared prompt', () => {
        alertsPage.promptCancel();
    });
});