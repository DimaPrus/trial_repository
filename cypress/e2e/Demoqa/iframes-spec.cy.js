/// <reference types="Cypress" />

describe('iframe suite', () => {
    it('Get iframe body', () => {
        cy.visit('/frames');
        cy.get('#frame1').then($getBody => {
            const iframeBody = $getBody.contents().find('body')
            cy.wrap(iframeBody).as('body')
        })
        cy.get('@body').find('h1').should('contain', 'This is a sample page')
    });
});