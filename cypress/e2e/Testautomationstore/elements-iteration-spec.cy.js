/// <reference types='Cypress' />
describe('Iteration through the elements', () => {
    beforeEach(() => {
        cy.selectProductType('Hair Care')
    })
    it('Select specific item from the list by text', () => {
        cy.selectedItemByText('Curls to straight Shampoo')
    });
    it('Log all items', function(){
        cy.logAllItems()
        })
    it('Select other specific item from the Hair Care list', () => {
        cy.selectedItemByText('Pantene Pro-V Conditioner, Classic Care')
    })        
});