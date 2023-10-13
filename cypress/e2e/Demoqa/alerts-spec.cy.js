/// <reference types="Cypress" />

describe('Working with alerts', () => {
    it('Basic alert test', () => {
        cy.visit('/alerts');
        cy.get('#alertButton').click()
        cy.on('window:alert', (str) => {
            expect(str).to.be.eql('You clicked a button')
        })
       
    });
    it('Verify delayed alert showing', () => {
        cy.visit('/alerts')
        cy.get('#timerAlertButton').click().wait(5000)
        cy.on('window:alert', (str) => {
            expect(str).to.be.equal('This alert appeared after 5 seconds1')
        })
    })
    it('Confirm the alert', () => {
        cy.visit('/alerts')
        cy.get('#confirmButton').click()

        cy.on('window:confirm', () => {
            return true;
        })
        cy.get('#confirmResult').should('have.text', 'You selected Ok')
    })
    it('Cancel the alert', () => {
        cy.visit('/alerts')
        cy.get('#confirmButton').click()

        cy.on('window:confirm', () => {
            return false
        })
        cy.get('#confirmResult').should('have.text', 'You selected Cancel')
    })
    it('Working with prompt', () => {
        cy.visit('/alerts')
    
        cy.window().then($win => {
            cy.stub($win, 'prompt').returns('My name is Dima')
            cy.get('#promtButton').click()
            cy.get('#promptResult').should('have.text', 'You entered My name is Dima')
        })
    })
    it.only('Cancel the appeared prompt', () => {
        cy.visit('/alerts')
    
        cy.window().then($win => {
            cy.stub($win, 'prompt')(() => null)
            cy.get('#promtButton').click()
            cy.get('#javascriptAlertsWrapper').find('.mr-3').contains('On button click, prompt box will appear').then(idProperty => {
                // Verify that no prompt result is shown
                expect(idProperty).to.not.haveOwnProperty('id')
            })
        })
    })
});