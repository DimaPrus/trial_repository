/// <reference types="Cypress" />

describe('Radiobuttons suite', () => {
    it('Handling radiobuttons', () => {
        cy.visit('/radio-button');
        cy.get('[class="row"] input').as('radios')
        cy.get('@radios').get('#yesRadio').check({force: true})
        //cy.get('#yesRadio').check({force: true})
        
        cy.get('@radios').each($buttons => {
            if ($buttons.attr('id') == 'yesRadio') {
                cy.wrap($buttons).should('be.checked')
                cy.log('The button is checked!')
            }
            if ($buttons.attr('id') == 'impressiveRadio') {
                cy.wrap($buttons).should('not.be.checked')
            }
            if ($buttons.attr('id') == 'noRadio'){
                cy.wrap($buttons).should('be.disabled')
            }
        })
    });
});