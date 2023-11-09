class AlertsPage {
    getAlertButton = () => cy.get('#alertButton');
    getTimerAlertButton = () => cy.get('#timerAlertButton');
    getConfirmButton = () => cy.get('#confirmButton');
    getPromptButton = () => cy.get('#promtButton');
    getConfirmResultText = () => cy.get('#confirmResult');
    getPromptResultText = () => cy.get('#promptResult');

    windowAlert = (text) => cy.on('window:alert', (str) => {
        expect(str).to.be.eql(text);
    });

    windowConfirm = (isConfirmed) => cy.on('window:confirm', () => {
        return isConfirmed;
    });

    alertsPageNavigation() {
        cy.visit('/alerts');
    };

    basicAlert() {
        this.getAlertButton().click();
        this.windowAlert('You clicked a button');
    }

    delayedAlert() {
        this.getTimerAlertButton().click().wait(5000);
        this.windowAlert('This alert appeared after 5 seconds');
    }

    confirmAlert(isConfirmed, text) {
        this.getConfirmButton().click();
        this.windowConfirm(isConfirmed);
        this.getConfirmResultText().should('have.text', `You selected ${text}`);
    }

    promptSuccess() {
        cy.window().then($win => {
            cy.stub($win, 'prompt').returns('My name is Dima');
            this.getPromptButton().click();
            this.getPromptResultText().should('have.text', 'You entered My name is Dima');
        });
    }

    promptCancel() {
        cy.window().then($win => {
            cy.stub($win, 'prompt')(() => null);
            this.getPromptButton().click();
            cy.get('#javascriptAlertsWrapper').find('.mr-3').contains('On button click, prompt box will appear').then(idProperty => {
                // Verify that no prompt result is shown
                expect(idProperty).to.not.haveOwnProperty('id');
            });
        });
    }
}

export default AlertsPage;