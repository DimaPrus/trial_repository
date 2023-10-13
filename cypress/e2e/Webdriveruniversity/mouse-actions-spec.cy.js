/// <reference types='Cypress' />

describe('Mouse actions suite', () => {
    it('Handling drag and drop actions', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#actions').invoke('removeAttr', 'target').click({force:true})
        cy.get('#draggable').trigger('mousedown', {which: 1})
        cy.get('#droppable').should('contain', 'DROP HERE!')
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force: true})
        cy.get('#droppable').should('contain', 'Dropped!')
    })
    it('Handling double-click action', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#actions').invoke('removeAttr', 'target').click({force:true})
        cy.get('#double-click').should('have.css', 'background-color', 'rgb(254, 196, 45)')
        cy.get('#double-click').dblclick().should('have.css', 'background-color', 'rgb(147, 203, 90)')
    })
    it.only('Handling double-click action', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#actions').invoke('removeAttr', 'target').click({force:true})
        cy.get('#click-box').should('contain', 'Click and Hold!').then(($holdClick => {
            cy.wrap($holdClick).trigger('mousedown', {which:1}).wait(2000).should('contain', 'Well done!')
            .should('have.css', 'background-color', 'rgb(0, 255, 0)')
            cy.wrap($holdClick).trigger('mouseup').should('contain', 'Dont release me!!!')
        }))
    })
})