/// <reference types='Cypress' />

describe('Autocomplete suite', () => {
    it('Handling autocomplete with if', () => {
        cy.visit('/auto-complete')
        cy.get('#autoCompleteSingleContainer').type('B')
        
        cy.get('.auto-complete__menu div').each(($color, index, list) => {
            cy.log($color.text())
            const colorName = $color.text()
            const selectedColor = index

            if (colorName == selectedColor) {
                $color.trigger('click')
            }
        })
    })
    it.only('Handling autocomplete with enter', () => {
        cy.visit('/auto-complete')
        cy.get('#autoCompleteSingleContainer').type('B{enter}')
    })
})