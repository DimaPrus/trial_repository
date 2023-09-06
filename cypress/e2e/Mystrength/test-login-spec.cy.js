describe('Login Suite', () => {
    it('user login with proper credentials', () => {
        cy.visit('https://app-intltest.mystrength.me/login')
        cy.get('[translate-attr-placeholder="login.email.placeholder"]').type('dmytro.wellness102@teladoc.com')
        cy.get('[translate="common.actions.next"]').click()
        cy.get('input[id="login_password"]').type('Test123456').wait(3000)
        cy.get('#signup_submit').click().wait(3000)
        cy.contains('Skip This').click()
        cy.location('pathname').should('eq', '/v/').wait(5000)
        // cy.get('h2').contains('Tools & Settings')
        // cy.contains('h2', 'Tools & Settings').should('contain', 'Tools')
        cy.contains('[href="/v/browse"]', 'View more').click()
        cy.get('ul.ms-card-container').find('li').contains('Find Calm').click()
        // cy.get('ul.ms-card-container').find('li').contains('Reducing Stress').click()

        // cy.userLogin('dmytro.wellness102@teladoc.com', 'Test123456')
    })
})