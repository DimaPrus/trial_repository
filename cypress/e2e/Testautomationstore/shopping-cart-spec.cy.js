import AutomationStore_Home_Page from "../../support/pageObjects/AutomationStore_HomePage";
import AutomationStore_HairCarePage from "../../support/pageObjects/AutomationStore_HairCarePage";

/// <reference types='Cypress' />

describe('Iteration through the elements', () => {
    const automationStoreHomePage = new AutomationStore_Home_Page();
    const automationStoreHairCarePage = new AutomationStore_HairCarePage();

    before(() => {
        cy.fixture('products').then(function (data) {
            globalThis.data = data;
        });
    });

    beforeEach(() => {
        automationStoreHomePage.hairCareProductsNavigation();
    });

    it('Select specific items to the cart', () => {
        automationStoreHairCarePage.addItemsToCart();
    });
});