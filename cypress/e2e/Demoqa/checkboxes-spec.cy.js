/// <reference types="Cypress" />

describe('Checkboxes suite', () => {
    it('Verify all checkboxes are selected', () => {
        cy.visit('/checkbox');
        cy.get('#tree-node-home').check({ force: true })
        cy.get('[title="Expand all"]').click()
        cy.get('input[type="checkbox"]').each($checked => {
            cy.wrap($checked).should('be.checked')
        })
    });
    it('Verify specific checkboxes are selected', () => {
        cy.visit('/checkbox');
        cy.get('[title="Expand all"]').click()
        cy.get('ol li').eq(1).as('desktopBlock')
        cy.get('@desktopBlock').find('[type="checkbox"]').check({ force: true }).then($desktop => {
            cy.wrap($desktop).get('[class="rct-title"]')
                .should('contain', 'Desktop')
                .should('be.checked')
            expect($desktop).to.be.checked
            cy.get('#result').should('contain', 'You have selected :desktopnotescommands')
        })
    })
    it.only('Verify unselected items', () => {
        cy.visit('/checkbox');
        cy.get('[title="Expand all"]').click()
        cy.get('ol li').eq(0).as('mainBlock')
        cy.get('@mainBlock').find('[type="checkbox"]').check({ force: true }).should('be.checked')

        

        cy.get('ol li').eq(4).find('[type="checkbox"]')
        .then($documentsBlock => {
            cy.wrap($documentsBlock).uncheck({ force: true }).should('not.be.checked')
            cy.get('#result').should('not.contain', 'documents office')
        })
    })
});