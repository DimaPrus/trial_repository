class FormSubmissionPage {
    userFullName = () => cy.get('#userName');
    userEmail = () => cy.get('#userEmail');
    userCurrentAddress = () => cy.get('#currentAddress');
    userPermanentAddress = () => cy.get('#permanentAddress');
    submitForm = () => cy.get('#submit');
    outputNameText = () => cy.get('#name');

    formPageNavigation() {
        cy.visit('/text-box');
    }

    fillInputData(fullName, email, currentAddress, permanentAddress) {
        this.userFullName().type(fullName);
        this.userEmail().type(email);
        this.userCurrentAddress().type(currentAddress);
        this.userPermanentAddress().type(permanentAddress);
        this.submitForm().click();
        this.outputNameText().should('have.attr', 'id', 'name').contains(fullName);
        this.outputNameText().should('contain.text', fullName);
        cy.title().should('include', 'DEMOQA');
        cy.url().should('include', '/text-box');
    }
}

export default FormSubmissionPage;