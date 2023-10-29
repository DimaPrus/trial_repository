/// <reference types='Cypress' />

describe('Text form submitting', () => {
    before(() => {
        cy.fixture('example').then((json) => {
            globalThis.JSON = json
        })
    })
    it('First test', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.get('[name="first_name"]').type(JSON.first_name)
        cy.get('[name="last_name"]').type(JSON.last_name)
        cy.get('[name="email"]').type(JSON.email)
        cy.get('textarea.feedback-input').type(JSON.comment)
        cy.get('[class="contact_button"]').contains('SUBMIT').click()
        cy.get('#contact_reply > h1').should('have.text', 'Thank You for your Message!')
    })
    it('Negative test for submission', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.get('[name="first_name"]').type(JSON.first_name)
        cy.get('[name="last_name"]').type(JSON.last_name)
        cy.get('textarea.feedback-input').type(JSON.comment)
        cy.get('[class="contact_button"]').contains('SUBMIT').click()
        cy.get('body').contains('Error: all fields are required Error: Invalid email address')
    })
})