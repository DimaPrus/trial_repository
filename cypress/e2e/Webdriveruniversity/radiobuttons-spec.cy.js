/// <reference types='Cypress' />

describe('Radiobuttons suite', () => {
    before(function () {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })
    })
    it('Handling radio-buttons', () => {
        cy.get('#radio-buttons').find('[type="radio"]').as('colorRadio')

        cy.get('@colorRadio').eq(3).check().then($colorName => {
            expect($colorName).to.be.checked
            expect($colorName).to.have.attr('value', 'orange')
        })
    })
    it('Handling radio-buttons', () => {
        const color = 'green'
        // cy.get('#radio-buttons input').each($input => {
        //     if($input.val() == color){
        //         cy.wrap($input).check()
        // } 
        // })
        cy.get(`#radio-buttons input[value="${color}"]`).check()
        cy.get('#radio-buttons input').each($input => {
            if ($input.val() == color) {
                cy.wrap($input).should('be.checked')
            } else {
                cy.wrap($input).should('not.be.checked')
            }
            // cy.wrap($input).should(($input.val() == color)? 'be.checked': 'not.be.checked')
        })
    })

    // Index method
    it('Handling radio-buttons', () => {
        const colorIndex = 3
        cy.get(`#radio-buttons input[type="radio"]`).eq(colorIndex).check()
        cy.get('#radio-buttons input').each(($input, index) => {
            if (index == colorIndex) {
                cy.wrap($input).should('be.checked')
            } else {
                cy.wrap($input).should('not.be.checked')
            }
            // cy.wrap($input).should(($input.val() == color)? 'be.checked': 'not.be.checked')
        })
    })
    it('Handling radio-buttons', () => {
        cy.get('#radio-buttons-selected-disabled input').eq(0).should('not.be.checked').as('lattuce')
        cy.get('@lattuce').invoke('attr', 'value').as('lettuce')

    })
})