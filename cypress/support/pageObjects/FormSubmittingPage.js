class FormSubmittingPage {
    #firstNameInput = () => cy.get('[name="first_name"]');
    #lastNameInput = () => cy.get('[name="last_name"]');
    #emailInput = () => cy.get('[name="email"]');
    #commentInput = () => cy.get('textarea.feedback-input');
    submitButton = () => cy.get('input[type="submit"]');
    resetButton = () => cy.get('input[type="reset"]');

    /**
     * @param {PersonModel} model
     */
    fillForm(model) {
        this.#firstNameInput().type(model.firstName);
        this.#lastNameInput().type(model.lastName);
        this.#emailInput().type(model.email);
        this.#commentInput().type(model.comment);
    }

    /**
     * @param {PersonModel} model
     */
    assertForm(model) {
        this.#firstNameInput().should('have.value', model.firstName);
        this.#lastNameInput().should('have.value', model.lastName);
        this.#emailInput().should('have.value', model.email);
        this.#commentInput().should('have.value', model.comment);

    }
}
export const formSubmittingPage = new FormSubmittingPage();


export class PersonModel {
    /**
     * @param {string} firstName
     * @param {string} lastName
     * @param {string} email
     * @param {string} comment
     */
    constructor(firstName, lastName, email, comment) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.comment = comment;
    }
};