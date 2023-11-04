Cypress.Commands.add('submitForm', (firstName, lastName, email, feedback, $selector, messageText) => {
    cy.get('[name="first_name"]').type(firstName)
    cy.get('[name="last_name"]').type(lastName)
    cy.get('[name="email"]').type(email)
    cy.get('textarea.feedback-input').type(feedback)
    cy.get('[class="contact_button"]').contains('SUBMIT').click()
    cy.get($selector).contains(messageText)
})

Cypress.Commands.add('contactUsNavigation', url => {
    cy.visit('/' + 'Contact-Us/contactus.html')
})