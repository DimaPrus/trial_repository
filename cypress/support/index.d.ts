declare namespace Cypress {
    interface Chainable<Subject = string> {
        userLoginMyStrengthEU(userEmail, password): Chainable<Element>;
        userLogin(userEmail, password): Chainable<Element>;
        submitForm(model, feedback, $selector, messageText): Chainable<Element>;
        contactUsNavigation(): Chainable<Element>;
    }
}