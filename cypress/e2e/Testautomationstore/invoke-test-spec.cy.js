/// <reference types='Cypress' />
describe('Invoke & aliases', () => {
    it('Invoke text from the first element', () => {
            cy.visit('/');
            cy.get('#categorymenu ul li').contains('Hair Care').click()
            cy.get('[class="thumbnails grid row list-inline"]').find('div .fixed_wrapper .prdocutname').eq(0)
            .invoke('text').as('headerText')
            cy.get('@headerText').its('length').should('be.gt', 5)
            cy.get('@headerText').should('include', 'Seaweed Conditioner')
    });
    it('Invoke chalange', function(){
        // My solution
            cy.visit('/');
            cy.get('.container-fixed div .thumbnail').as('thumbnailList')
            cy.get('@thumbnailList').its('length').should('be.gt', 15)
            cy.get('@thumbnailList').find('.pricetag .productcart').invoke('attr', 'title').should('include', 'Add to Cart')

            // Instructor's Solution
            // cy.visit('/')
            // cy.get('.thumbnail').as('productThumbnail')
            // cy.get('@productThumbnail').should('have.length', 16)
            // cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
        })
    it.only('Product price calculation', function(){
            // My solution
            cy.visit('/');
            cy.get('.thumbnail').find('.oneprice').invoke('text').as('onePriceItems')
            cy.get('.thumbnail').find('.pricenew').invoke('text').as('sellItems')
            let generalPrice = 0
            cy.get('@onePriceItems').then($onePriceItemText => {
                let onePriceItems = $onePriceItemText.split('$')
                let totalPrice = 0
                // map example
                // onePriceItems.map(items => {
                //     cy.log('$' + items)
                // })

                // for example
                for (let i = 1; i < onePriceItems.length; i++) {
                    cy.log('$' + onePriceItems[i])
                    totalPrice += Number(onePriceItems[i])
                }
                generalPrice += totalPrice
                cy.log('Total price of non-sale items is: ' + '$' + totalPrice)
            })
            cy.get('@sellItems').then($sellPriceItemText => {
                let sellItems = $sellPriceItemText.split('$')
                let totalSellPrice = 0
                for (let i = 1; i < sellItems.length; i++){
                    cy.log('$' + sellItems[i])
                    totalSellPrice += Number(sellItems[i])
                }
                generalPrice += totalSellPrice
                cy.log('Total sell items price is: ' + '$' + totalSellPrice)
            })
            .then(() => {
                cy.log('Total item price is: ' + generalPrice)
            })
        })
});