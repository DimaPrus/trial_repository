/// <reference types="Cypress" />

describe('Handling date-pickers', () => {
    it('Verify that future date is selected based on text in the header', () => {
        cy.visit('/date-picker');
        cy.get('#datePickerMonthYearInput').click()

        let date = new Date()
        date.setDate(date.getDate() +366)

        let futureYear = date.getFullYear()
        let futureMonth = date.toLocaleDateString('default', {month: 'long'})
        let futureDay = date.getDate()

        function getYearAndMonth() {
            cy.get('.react-datepicker__current-month').then(selectedDate => {
                if (!selectedDate.text().includes(futureYear)) {
                    cy.get('.react-datepicker__navigation--next').click()
                    getYearAndMonth()
                }
            }).then(() => {
                cy.get('.react-datepicker__current-month').then(selectedDate => {
                    if (!selectedDate.text().includes(futureMonth)) {
                        cy.get('.react-datepicker__navigation--next').click()
                        getYearAndMonth()
                    }
                })
            })
        }

        function selectDay() {
            cy.get('.react-datepicker__day').contains(futureDay).click()
        }
        getYearAndMonth()
        selectDay()
    });
    it('Verify that future date is selected from the drop-downs', () => {
        cy.visit('/date-picker');
        cy.get('#datePickerMonthYearInput').click()
        cy.get('select[class="react-datepicker__month-select"]').as('monthDropdown')
        cy.get('@monthDropdown').each(item => {
            if (item.text().includes('August')) {
                cy.wrap(item).select('August')
            }
        })
        cy.get('.react-datepicker__year-select').select('2024')
    });
    it('Verify that future date is selected from the drop-downs', () => {
        cy.visit('/date-picker');
        cy.get('#datePickerMonthYearInput').click()
        cy.get('select.react-datepicker__month-select').as('monthDropdown')
        cy.get('@monthDropdown').each(item => {
            if (item.text().includes('August')) {
                cy.wrap(item).select('August')
            }
        })
        cy.get('.react-datepicker__year-select').select('2024')
    });
    it.only('Verify that future date is selected from the drop-downs', () => {
        let date = new Date()
        date.setDate(date.getDate())
        console.log(date.getDate())
        let currentDate = date.getDate()
        
        cy.visit('/date-picker');
        cy.get('#dateAndTimePickerInput').click()
        cy.get('.react-datepicker__month-read-view').click()
        cy.get('.react-datepicker__month-option').as('monthDropdown').should('have.length', 12)
        cy.get('@monthDropdown').contains('August').click()
        cy.get('.react-datepicker__day').contains(currentDate).click()
        cy.get('.react-datepicker__time-list-item ').each(item => {
            if (item.text() == '20:00') cy.wrap(item).click();
        })
        cy.get('.react-datepicker__input-container input').eq(1).then(assertion => {
            expect(assertion.attr('value')).includes('8:00 PM')
        })
    });
});