/// <reference types='Cypress' />

describe('Autocomplete suite', () => {
    it('Handling autocomplete', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force:true})
        cy.get('#myInput').type('A')
        cy.get('#myInputautocomplete-list *').each($foodItem => {
            const productName = $foodItem.text()
            const selectedProduct = 'Almond'
            if (productName == selectedProduct) {
                cy.wrap($foodItem).click()
                cy.get('#submit-button').click()
                cy.url().should('includes', selectedProduct)
            }
        }).then(() => {
        cy.get('#myInput').type('G')
        cy.get('#myInputautocomplete-list *').each($foodItem => {
            const productName = $foodItem.text()
            const selectedProduct = 'Grapes'
            if (productName == selectedProduct) {
                $foodItem.trigger('click')
                cy.get('#submit-button').click()
                cy.url().should('includes', selectedProduct)
                }
            })
        })
    })
})