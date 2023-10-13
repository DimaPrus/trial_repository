/// <reference types="Cypress" />

describe('Demoqa suite', () => {
    it('Text form submitting test', () => {
        cy.visit('/');
        cy.get('[class="card mt-4 top-card"]').contains('Elements').click()
        cy.get('[class="text"]').contains('Text Box').click().wait(2000)
        cy.get('[placeholder="Full Name"]').type('Dima Prus')
        cy.get('[placeholder="name@example.com"]').type('Dima@gmail.com')
        cy.get('[placeholder="Current Address"]').type('Street12')
        cy.get('#permanentAddress').type('Permanent Address')
        cy.get('#submit').click()
        // Assertions
        // cy.get('[class="border col-md-12 col-sm-12"]').find('p').should('have.attr', 'id', 'name').contains('Dima Prus')
        // cy.get('[class="border col-md-12 col-sm-12"] > :nth-child(2)').should('have.attr', 'id', 'email').contains('Dima@gmail.com')
        // cy.get('[class="border col-md-12 col-sm-12"] > :nth-child(3)').should('have.attr', 'id', 'currentAddress').contains('Street12')
        // cy.get('[class="border col-md-12 col-sm-12"] > :nth-child(4)').should('have.attr', 'id', 'permanentAddress').contains('Permanent Address')
        cy.get('#output #name').should('have.attr', 'id', 'name').contains('Dima Prus')
        cy.get('#output #name').should('contain.text', 'Dima Prus')
        cy.title().should('include', 'DEMOQA')
        cy.url().should('include', '/text-box')
    });
});