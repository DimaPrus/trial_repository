import DatePickerPage from "../../support/pageObjects/DatePickerPage";

/// <reference types="Cypress" />

describe('Handling date-pickers', () => {

    let datePickerPage;

    beforeEach(() => {
        datePickerPage = new DatePickerPage();
        datePickerPage.datePickerPageNavigation();
    });

    it('Verify that future date is selected based on text in the header', () => {
        datePickerPage.selectFutureDate();
    });

    it('Verify that future date is selected from the drop-downs', () => {
        datePickerPage.selectDateFromDropDown('July', '2028');
    });

    it('Verify that date and time are selected from the drop-downs', () => {
        datePickerPage.selectDateAndTime('December', 'December 18', '18:00', '6:00 PM');
    });
});