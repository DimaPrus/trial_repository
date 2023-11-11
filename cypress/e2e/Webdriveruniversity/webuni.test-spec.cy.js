import { homePage } from "../../support/pageObjects/HomePage";
import { PersonModel, formSubmittingPage } from "../../support/pageObjects/FormSubmittingPage";
import { faker } from '@faker-js/faker';

describe('Text form submitting', () => {
    before(() => {
        // cy.fixture('example').then(file => {
        //     globalThis.file = file;
        // });
    });

    beforeEach(() => {
        cy.fixture('example').as('userData');
        homePage.homePageNavigation();
        homePage.submitFormNavigation();
    });

    // it('First test', () => {
    //     formSubmittingPage.fillForm();
    //     formSubmittingPage.submitButton().click();
    // });

    it('First test', () => {
        const person = new PersonModel(
            faker.person.firstName(),
            faker.person.lastName(),
            faker.internet.email(),
            faker.lorem.paragraph()
        );
        const personEdit = new PersonModel(
            faker.person.firstName(),
            faker.person.lastName(),
            faker.internet.email(),
            faker.lorem.paragraph(2)
        );

        formSubmittingPage.fillForm(person);
        formSubmittingPage.assertForm(person);
        formSubmittingPage.resetButton().click();

        formSubmittingPage.fillForm(personEdit);
        formSubmittingPage.assertForm(personEdit);
        formSubmittingPage.submitButton().click();
    });

    it.only('Negative test for submission', () => {
        cy.get('@userData').then(data => {
            const person = new PersonModel(
                data['first_name'],
                data['last_name'],
                data['email']+"@@@",
                data['comment']
            );
            formSubmittingPage.fillForm(person);
            formSubmittingPage.assertForm(person);
            formSubmittingPage.resetButton().click();

            cy.submitForm(person, 'body', 'Error: Invalid email address');
        });
    });
});