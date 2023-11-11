Cypress.Commands.add('submitForm', function (_model, feedback, $selector, messageText) {
        cy.get('[name="first_name"]').type(_model.firstName);
        cy.get('[name="last_name"]').type(_model.lastName);
        cy.get('[name="email"]').type(_model.email);
        cy.get('textarea.feedback-input').type(feedback);
        cy.get('[class="contact_button"]').contains('SUBMIT').click();
        cy.get($selector).contains(messageText);
    });

Cypress.Commands.add('contactUsNavigation', _url => {
    cy.visit('/' + 'Contact-Us/contactus.html');
});