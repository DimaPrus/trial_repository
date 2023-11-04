describe('Test suite', () => {
    it('Login', () => {
        cy.visit('https://www.xboxachievements.com/')
        cy.get('.login__btn').first().click()
        cy.get('input[type="text"]').last().type('edmadd1ct')
        cy.get('input[type="password"]').last().type('d1m14lovetrancemusic')
        cy.get('#elSignIn_submit').click()
    })
    it('Verify overall games progress with then', () => {
        cy.visit('https://www.xboxachievements.com/')
        cy.get('h5').contains('edmadd1ct').click()
        cy.get('a').contains('Played Games').click()

        cy.get('.achilist__title').each((game, index) => {
            cy.get('.is-active').eq(index +1).then(progress => {
                cy.log(game.text() + ' ' + progress.text())
            })
        })
    })
    it.only('Verify overall games progress with JQuery method', () => {
        cy.visit('https://www.xboxachievements.com/')
        cy.get('h5').contains('edmadd1ct').click()
        cy.get('a').contains('Played Games').click()

        cy.get('.achilist__title').each((game, index) => {
            cy.log(game.text() + ': - ' + Cypress.$('.is-active').eq(index +1).text())
        })
    })
    
})