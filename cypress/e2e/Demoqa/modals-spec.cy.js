import ModalsPage from "../../support/pageObjects/ModalsPage";

/// <reference types="Cypress" />

describe('Modals suite', () => {
    let modalsPage;

    beforeEach(() => {
        modalsPage = new ModalsPage();
        modalsPage.modalsPageNavigation();
    });
    it('Working with small modal', () => {
        modalsPage.smallModalTest();
    });

    it('Working with large modal', () => {
        modalsPage.largeModalTest();
    });
});
