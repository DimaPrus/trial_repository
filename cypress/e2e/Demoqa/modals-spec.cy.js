/// <reference types="Cypress" />

describe('Modals suite', () => {
    it('Working with small modal', () => {
        cy.visit('/modal-dialogs');
        cy.get('#showSmallModal').click()
        cy.get('.modal-content').as('modalSmall')
        cy.get('@modalSmall').then($modal => {
            expect($modal.text()).includes('This is a small modal. It has very less content')
            cy.wrap($modal).get('#closeSmallModal').click()
        })
    });
    it('Working with large modal', () => {
        cy.visit('/modal-dialogs');
        cy.get('#showLargeModal').click()
        cy.get('.modal-content').as('largeModal')

        cy.get('@largeModal').then($modal => {
            cy.wrap($modal).find('#example-modal-sizes-title-lg').should('have.text', 'Large Modal')
            expect($modal.text()).includes('Lorem Ipsum is simply dummy text')
            cy.wrap($modal).get('#closeLargeModal').click()
        })
      
    });
});