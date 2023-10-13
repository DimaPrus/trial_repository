/// <reference types="Cypress" />

describe('Mouse actions suite', () => {
    it('Simple droppable test', () => {
        cy.visit('/droppable');
        cy.get('#draggable').trigger('mousedown', {which: 1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force: true})
    });
    it('Verify droppable window styles', () => {
        cy.visit('/droppable');
        cy.get('#droppableExample-tab-accept').click()
        cy.get('#acceptable').trigger('mousedown', {which: 1})
        cy.get('#droppable').trigger('mousemove', { force: true, which: 1, pageX: 930, pageY: 450 }).trigger('mouseup', {force: true}).wait(2000)
    });
    it('Verify droppable window styles by dragging on the top', () => {
        cy.visit('/droppable');
        cy.get('#droppableExample-tab-preventPropogation').click()
        cy.get('#dragBox').trigger('mousedown', {which: 1})
        cy.get('#notGreedyDropBox').trigger('mousemove', {force: true, which: 1, pageX: 930, pageY: 420 })
        .should('have.css', 'background-color', 'rgb(143, 188, 143)')
        .trigger('mouseup', {force: true})
        .should('have.css', 'background-color', 'rgb(70, 130, 180)')
    });
    it('Verify droppable window styles by dragging on the center box', () => {
        cy.visit('/droppable');
        cy.get('#droppableExample-tab-preventPropogation').click()
        cy.get('#dragBox').trigger('mousedown', {which: 1})
        cy.get('#notGreedyInnerDropBox').trigger('mousemove', {force: true, which: 1, pageX: 930, pageY: 420 })
        .should('have.css', 'background-color', 'rgb(60, 179, 113)')
        .trigger('mousemove', {force: true, which: 1, pageX: 910, pageY: 500 })
        .trigger('mouseup', {force: true})
        .should('have.css', 'background-color', 'rgb(70, 130, 180)')
    });
    it.only('Verify droppable window styles by dragging on the center box[2, greedy]', () => {
        cy.visit('/droppable');
        cy.get('#droppableExample-tab-preventPropogation').click()
        cy.get('#dragBox').trigger('mousedown', {which: 1})
        cy.get('#greedyDropBoxInner').trigger('mousemove', 'center')
        .should('have.css', 'background-color', 'rgb(143, 188, 143)')
        .trigger('mouseup', {force: true})
        .should('have.css', 'background-color', 'rgb(70, 130, 180)')
    });
});