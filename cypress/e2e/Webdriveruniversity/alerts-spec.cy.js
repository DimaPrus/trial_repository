/// <reference types='Cypress' />

describe('Alerts practice', () => {
    it('Verify simple alert appearing', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        cy.get('#button1').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!')
        })
    })
    it('Verify by clicking manually on the OK button in the alert', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        cy.get('#button4').click()

        cy.on('window:confirm', () => {
            return true;
        })
        cy.get('#confirm-alert-text').should('contain', 'You pressed OK!')
    })
    it('Verify by clicking manually on the Cancel button in the alert', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        cy.get('#button4').click()

        cy.on('window:confirm', () => {
            return false;
        })
        cy.get('#confirm-alert-text').should('contain', 'You pressed Cancel!')
    })
    it.only('Working with stub', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        const stub = cy.stub()
        cy.on('window:confirm', stub)

        cy.get('#button4').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(() => {
            return true;
        }).then(() => {
            cy.get('#confirm-alert-text').contains('You pressed OK!')
        })
    })
})