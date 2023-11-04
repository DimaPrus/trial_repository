class HomePage {
    homePageNavigation() {
        cy.visit('/')
    }
    submitFormNavigation() {
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
    }
}

export default HomePage;