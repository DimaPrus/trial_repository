import AutoCompletePage from "../../support/pageObjects/AutoCompletePage";

/// <reference types='Cypress' />

describe('Autocomplete suite', () => {

    let autoCompletePage;

    beforeEach(() => {
        autoCompletePage = new AutoCompletePage();
        autoCompletePage.autoCompleteNavigation();
    });

    it('Handling autocomplete with if', () => {
        autoCompletePage.selectColor('B');
    });

    it('Handling autocomplete with enter', () => {
        autoCompletePage.selectColorWithEnter('R{enter}');
    });
});
