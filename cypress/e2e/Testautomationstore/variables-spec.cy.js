/// <reference types='Cypress' />
describe('Veariables suite', () => {
    it('Variables test', function() {
        cy.visit('/')
        cy.get("a[href*='/category&path=']").contains('Makeup').click()
        cy.get('h1 .maintext').then(($getText) => {
            const getText = $getText.text()
            cy.log('Header text is: ' + getText)
        })
    })
    it('Contact us form', () => {

        // Assertion using cypress chai chainable command
        cy.visit('https://automationteststore.com/index.php?rt=content/contact')
        cy.get('#field_11').should('contain', 'First name:')
    })
    it.only('Contact us form using JQuery', () => {

        // Assertion using JQuery
        cy.visit('https://automationteststore.com/index.php?rt=content/contact')
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(($contactusForm) => {
            const contactusForm = $contactusForm.find('#field_11').text()
            expect(contactusForm).to.contain('First name:')
        })
    })
})