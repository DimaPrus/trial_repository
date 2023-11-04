import  HomePage  from "../../support/pageObjects/Homepage"
import  FormSubmittingPage  from "../../support/pageObjects/FormSubmittingPage"
/// <reference types='Cypress' />

describe('Text form submitting', () => {
    before(() => {
        cy.fixture('example').then((json) => {
            globalThis.JSON = json
        })
    })
    beforeEach(() => {
        const homePage = new HomePage();
        homePage.homePageNavigation()
        homePage.submitFormNavigation()
    })
    it.only('First test', () => {
        const formSubmitting = new FormSubmittingPage();
        formSubmitting.submitTheForm()
    })
    it('Negative test for submission', () => {
        cy.submitForm(JSON.first_name, JSON.last_name, ' ', JSON.comment, 'body', 'Error: Invalid email address')
    })
})