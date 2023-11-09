import FormSubmissionPage from "../../support/pageObjects/FormSubmissionPage";

/// <reference types="Cypress" />

describe('Demoqa suite', () => {
    let formSubmissionPage;

    beforeEach(() => {
        formSubmissionPage = new FormSubmissionPage();
        formSubmissionPage.formPageNavigation();
    });
    it('Text form submitting test', () => {
        formSubmissionPage.fillInputData('Dima Prus', 'dima@mail.com', 'Street1', 'Street2');
    });
});
