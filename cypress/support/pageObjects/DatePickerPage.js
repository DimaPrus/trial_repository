class DatePickerPage {
    monthYearDateInput = () => cy.get('#datePickerMonthYearInput');
    currentMonthAndYearBlock = () => cy.get('.react-datepicker__current-month');
    nextButton = () => cy.get('.react-datepicker__navigation--next');
    calendarDay = () => cy.get('.react-datepicker__day');
    monthDropDown = () => cy.get('select[class="react-datepicker__month-select"]').as('monthDropdown');
    yearDropDown = () => cy.get('.react-datepicker__year-select');

    dateAndTimeInput = () => cy.get('#dateAndTimePickerInput');
    dateAndTimeMonthDropDown = () => cy.get('.react-datepicker__month-read-view');
    dateAndTimeDropDownOptions = () => cy.get('.react-datepicker__month-option').as('monthDropdown');
    dateAndTimeHoursOptions = () => cy.get('.react-datepicker__time-list-item');
    inputResultText = () => cy.get('.react-datepicker__input-container input').eq(1);






    datePickerPageNavigation() {
        cy.visit('/date-picker');
    }

    selectFutureDate() {
        let date = new Date();
        date.setDate(date.getDate() + 2);
        let futureYear = date.getFullYear();
        let futureMonth = date.toLocaleDateString('default', { month: 'long' });
        let futureDay = date.getDate();

        this.monthYearDateInput().click();


        this.#getYearAndMonth(futureYear, futureMonth);
        this.#selectDay(futureDay);
    }

    #getYearAndMonth(year, month) {
        this.currentMonthAndYearBlock().then(selectedDate => {
            if (!selectedDate.text().includes(year)) {
                this.nextButton().click();
                this.#getYearAndMonth(year, month);
            }
        }).then(() => {
            this.currentMonthAndYearBlock().then(selectedDate => {
                if (!selectedDate.text().includes(month)) {
                    this.nextButton().click();
                    this.#getYearAndMonth(year, month);
                }
            });
        });
    }

    #selectDay(day) {
        this.calendarDay().contains(day).click();
    }

    selectDateFromDropDown(month, year) {
        this.monthYearDateInput().click();
        this.monthDropDown().each(item => {
            if (item.text().includes(month)) {
                cy.wrap(item).select(month);
            }
        });
        this.yearDropDown().select(year);
    }

    selectDateAndTime(month, calendarDay, dayTime, assert) {
        let date1 = new Date();
        date1.setDate(date1.getDate());
        console.log(date1.getDate());
        let currentDate = date1.getDate();

        this.dateAndTimeInput().click();
        this.dateAndTimeMonthDropDown().click();
        this.dateAndTimeDropDownOptions().should('have.length', 12);
        this.dateAndTimeDropDownOptions().contains(month).click();
        this.calendarDay().each(($day) => {
            if ($day.attr('aria-label').includes(calendarDay)) {
                cy.wrap($day).click();
            }
        });
        cy.get('.react-datepicker__time-list-item').each(item => {
            if (item.text() == dayTime) {
                cy.wrap(item).click();
            };
        });
        this.inputResultText().then(assertion => {
            expect(assertion.attr('value')).includes(assert);
        });
    }
}

export default DatePickerPage;
