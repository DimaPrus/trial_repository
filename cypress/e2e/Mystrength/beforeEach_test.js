describe('user log in v2', () => {
    beforeEach (() => {
        cy.userLogin('dmytro.wellness.test@teladoc.com', 'Test1234567')
    })
    it('Open the Activity page', () => {
        cy.get('[translate="vnext.sidebar.activities"]').click()
    })
})