/// <reference types='Cypress' />


describe('Date-picker suite', () => {
    it('Verify selecting future day after 1 year', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#datepicker').invoke('removeAttr', 'target').click({force:true})
        cy.get('.form-control').click()

        let date = new Date()

        date.setDate(date.getDate() +366)
        let fullYear = date.getFullYear()
        let fullMonth = date.toLocaleString('default', {month: 'long'})
        let futureDay = date.getDate()
       
       

        function getMonthAndYear() {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                if(!currentDate.text().includes(fullYear)) {
                    cy.get('.next').first().click()
                    getMonthAndYear()
                }
            }).then(() => {
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                    if(!currentDate.text().includes(fullMonth)) {
                        cy.get('.next').first().click()
                        getMonthAndYear()
                    }
                })
            })
        }

        function selectProperDay() {
            cy.get('[class="day"]').contains(futureDay).click()
        }

        getMonthAndYear()
        selectProperDay()
    })
})