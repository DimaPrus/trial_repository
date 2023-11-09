import CheckboxesPage from "../../support/pageObjects/CheckboxesPage";

/// <reference types="Cypress" />

describe('Checkboxes suite', () => {
    let checkboxesPage;

    beforeEach(() => {
        checkboxesPage = new CheckboxesPage();
        checkboxesPage.checkboxPageNavigation();
    });

    it('Verify all checkboxes are selected', () => {
        checkboxesPage.selectAllCheckboxes();
    });

    it('Verify specific checkboxes are selected', () => {
        checkboxesPage.selectSpecificCheckboxes();
    });

    it.only('Verify unselected items', () => {
        checkboxesPage.unselectSpecificCheckboxes();

    });
});