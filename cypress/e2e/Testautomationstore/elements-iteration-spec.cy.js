/// <reference types='Cypress' />
describe('Iteration', () => {
    it('Select specific item from the list by text', () => {
            cy.visit('/');
            cy.get('#categorymenu ul li').contains('Hair Care').click()
            cy.get('.fixed_wrapper .prdocutname').each(($item, index, $list) => {
                if($item.text() === 'Eau Parfumee au The Vert Shampoo'){
                    cy.wrap($item).click()
                }
            })
    });
    it('Log all items', function(){
            cy.visit('/');
            cy.get('#categorymenu ul li').contains('Hair Care').click()
            cy.get('.fixed_wrapper .prdocutname').each(($item, index, $list) => {
               cy.log('Item №: ' + index + ' : ' + $item.text())
            })
        })
});