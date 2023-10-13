/// <reference types='Cypress' />

describe('Text form submitting', () => {
    it('First test', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        // First method
        cy.get('#checkboxes').find('[value="option-1"]').check().should('be.checked')

        // Second method by index
        //cy.get('#checkboxes input').eq(1).check().should('be.checked')

        //Third method by 'first' 'last'
        //cy.get('#checkboxes input').first().check().should('be.checked')
    })

    // Chalange
    it('Uncheck the checkbox', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        cy.get('#checkboxes input').eq(2).uncheck().should('not.be.checked')
    })
    it.only('Multiple checkboxes', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        
        cy.get('[type="checkbox"]').check(["option-1", "option-2", "option-3", "option-4"])
        //const options = ["option-1", "option-2", "option-3", "option-4"]

        // Log all options in console
        //new Array("option-1", "option-2", "option-3", "option-4").map(option => {
            // cy.get('[type="checkbox"]').check(option)
            // })
    })
})