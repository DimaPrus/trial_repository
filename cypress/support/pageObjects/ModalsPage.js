class ModalsPage {
    smallModal = () => cy.get('#showSmallModal');
    largeModal = () => cy.get('#showLargeModal');
    modalContent = () => cy.get('.modal-content');

    modalsPageNavigation() {
        cy.visit('/modal-dialogs');
    }

    smallModalTest() {
        this.smallModal().click();
        this.modalContent().then($modal => {
            expect($modal.text()).includes('This is a small modal. It has very less content');
            cy.wrap($modal).get('#closeSmallModal').click();
        });
    }

    largeModalTest() {
        this.largeModal().click();
        this.modalContent().then($modal => {
            cy.wrap($modal).find('#example-modal-sizes-title-lg').should('have.text', 'Large Modal');
            expect($modal.text()).includes('Lorem Ipsum is simply dummy text');
            cy.wrap($modal).get('#closeLargeModal').click();
        });
    }
}

export default ModalsPage;