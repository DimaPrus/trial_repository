Cypress.Commands.add('selectedItemByText', productName => {
    cy.get('.fixed_wrapper .prdocutname').each(($item) => {
        if($item.text().includes(productName)){
            cy.wrap($item).click()
        }
    })
})

Cypress.Commands.add('selectItemToCart', productName => {
    cy.get('.fixed_wrapper .prdocutname').each(($item, index) => {
        if($item.text() === productName){
            cy.get('.productcart').eq(index).click()
        }
    })
})

Cypress.Commands.add('logAllItems', itemTitle => {
    cy.get('.fixed_wrapper .prdocutname').each(($item, index) => {
        cy.log('Item №: ' + index + ' : ' + $item.text())
     })
})

Cypress.Commands.add('selectProductType', productCategory => {
    cy.visit('/')
    cy.get('#categorymenu ul li').contains(productCategory).click()
})