describe('Login Suite', () =>{
    it('first login test', () => {
        cy.visit('https://app-intltest.mystrength.me/login')
        cy.get('#login_email').type('dmytro.wellness102@teladoc.com')
        cy.get('#signup_email_next').click()
        cy.get('#login_password').type('Test123456')
        cy.get('#signup_submit').click()
        for (let index = 0; index < 5; index++){
            cy.log(index)
            cy.get('[icon-id="mood-icon-4"]').click().wait(2000)
        }
        cy.get('.success').contains('Save').click()
    })
})