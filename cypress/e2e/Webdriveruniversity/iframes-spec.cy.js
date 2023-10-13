/// <reference types='Cypress' />

describe('Iframes suite', () => {
    it('Verify handling iframes', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#iframe').invoke('removeAttr', 'target').click({force:true})
        cy.get('#frame').then($iframeContent => {
            const iframeBody = $iframeContent.contents().find('body')
            cy.wrap(iframeBody).as('iframeContent')
        })
        cy.get('@iframeContent').find('#button-find-out-more').click()
        cy.get('@iframeContent').find('#myModal').as('modalWindow')

        cy.get('@modalWindow').then($modalWindowText => {
            const modalText = $modalWindowText.text()
            expect(modalText).include('Welcome to webdriveruniversity.com')
        })
        cy.get('@modalWindow').contains('Close').click()
        
    })
})