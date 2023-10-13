/// <reference types='Cypress' />

describe('Navigation suite', () => {
    it('Verify redirecting to the correct pages', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'Contact-Us/contactus.html')
        cy.go('back')
        cy.url().should('include', '/')
        cy.reload()
        cy.go(1)
        cy.url().should('include', 'Contact-Us/contactus.html')
        cy.go('back')
        cy.get('#login-portal').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'Login-Portal')
        cy.go('back')

        // Chalange

        cy.get('#to-do-list').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'To-Do-List')
        cy.go(-1)
        cy.url().should('include', '/')
    })
})