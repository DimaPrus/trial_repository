/// <reference types='Cypress' />

describe('Text form submitting', () => {
    it('First test', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.get('[name="first_name"]').type('Dmytro')
        cy.get('[name="last_name"]').type('Prus)')
        cy.get('[name="email"]').type('dima@gmail.com')
        cy.get('textarea.feedback-input').type('comments')
        cy.get('[class="contact_button"]').contains('SUBMIT').click()
        cy.get('#contact_reply > h1').should('have.text', 'Thank You for your Message!')
    })
    it('Negative test for submission', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.get('[name="first_name"]').type('Dmytro')
        cy.get('[name="last_name"]').type('Prus)')
        cy.get('textarea.feedback-input').type('comments')
        cy.get('[class="contact_button"]').contains('SUBMIT').click()
        cy.get('body').contains('Error: all fields are required Error: Invalid email address')
    })
})