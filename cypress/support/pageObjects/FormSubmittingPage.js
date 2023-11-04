/// <reference types='Cypress' />

class FormSubmittingPage {
    firstNameInput = cy.get('[name="first_name"]');
    lastNameInput = cy.get('[name="last_name"]');
    emailInput = cy.get('[name="email"]');
    commentInput = cy.get('textarea.feedback-input');
    submitButton = cy.get('[class="contact_button"]').contains('SUBMIT');

    submitTheForm() {
        this.firstNameInput.type(JSON.first_name);
        this.lastNameInput.type(JSON.last_name);
        this.emailInput.type(JSON.email);
        this.commentInput.type(JSON.comment);
        this.submitButton.click();
    }
}

export default FormSubmittingPage;