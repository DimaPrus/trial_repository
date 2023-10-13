/// <reference types='Cypress' />

describe('Dropdown suite', () => {
    it('Handling dropdowns', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        cy.get('#dropdowm-menu-1').select('Python')
        cy.get('#dropdowm-menu-2').select('JUnit')

        cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven')
        cy.get('#dropdowm-menu-2').select('TestNG').contains('Test')
    })
    it.only('Verify entire dropdown list', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})


        //cy.get('.section-title select').eq(0).as('dropDownMenus')
        cy.get('.thumbnail').contains('Dropdown Menu(s)').then($item => {
            cy.wrap($item).get('.section-title > select').as('dropDownMenus')
        })
        
        cy.get('#dropdowm-menu-1').as('firstDropDown')
        cy.get('#dropdowm-menu-2').as('secondDropDown')
        cy.get('#dropdowm-menu-3').as('thirdDropDown')
        // const menu1 = cy.get('#dropdowm-menu-1')
        // const menu2 = cy.get('#dropdowm-menu-2')
        // const menu3 = cy.get('#dropdowm-menu-3')
        
        cy.get('@dropDownMenus').each(($dropDown, index) => {
            if (index == 0) {
                cy.log($dropDown.attr('id'))
                cy.wrap($dropDown).select('SQL')
            }
            if ($dropDown.attr('id') == 'dropdowm-menu-2') {
                cy.wrap($dropDown).select('Maven')
            }
            if ($dropDown.attr('id') == 'dropdowm-menu-3') {
                cy.wrap($dropDown).select('JavaScript')
            }
        })
    })
})