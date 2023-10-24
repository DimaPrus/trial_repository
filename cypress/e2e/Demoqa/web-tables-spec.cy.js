/// <reference types='Cypress' />

describe('Web tables suite', () => {
    it('Handling web tables', () => {
        cy.visit('/webtables')

        const tableDataArray = []
        let num = 0
        cy.get('.rt-table .rt-tr .rt-td:nth-child(5)').each(($data, index) => {
                tableDataArray.push(Number($data.text()))
        }).then(() => {
            
            tableDataArray.map(price => {
                num += Number(price)
            })
            // for (let i =0; i < tableDataArray.length; i++) {
            //     if (Number(tableDataArray[i])) {
            //         num += Number(tableDataArray[i])
            //     }
            // }
            cy.log('The salary sum is: ' + num)
        })
    })
    it('Handling web tables', () => {
        cy.visit('/webtables')
        cy.get('.rt-table [class="rt-td"]').each(($data, index) => {
            let tableData = $data.text().trim()
            if (tableData) {
                cy.log($data.text())
            }
        })
    })
    it('Handling web tables', () => {
        cy.visit('/webtables');
        let totalSalary = 0;
        cy.get('div[role="row"]').find('.action-buttons').parent().parent().each(data => {
            cy.wrap(data).within(it => {
                cy.wrap(it).get('div[role="gridcell"]').eq(4).invoke('text').then(text => {
                    totalSalary += Number(text);
                });
            });
        }).then(() => {
            cy.log('Total salary is ' + totalSalary);
        });
    })
    it('Verify adding a new data into the table', () => {
        cy.visit('/webtables')
        let rowArray = []
        cy.get('.rt-tbody .rt-tr:not(".-padRow")').each(filledRow => {
            rowArray.push(filledRow.text())
        }).then(() => {
            cy.get('#addNewRecordButton').click()
            cy.get('#firstName').type('Dima')
            cy.get('#lastName').type('Prus')
            cy.get('#userEmail').type('dprus@gmail.com')
            cy.get('#age').type('31')
            cy.get('#salary').type('1000')
            cy.get('#department').type('QA')
            cy.get('#submit').click()
            cy.get('.rt-tbody .rt-tr:not(".-padRow")').last().then(newRecord => {
                rowArray.push(newRecord.text())
                expect(newRecord.text()).includes('DimaPrus')
                console.log(rowArray)
            })
        })   
    })
    it.only('Verify web table after search result is applied', () => {
        cy.visit('/webtables')
        let tableArray = []
        cy.get('.rt-tbody .rt-tr:not(".-padRow")').as('tableRow').each(filledRow => {
            tableArray.push(filledRow.text())
        }).then(search => {
            console.log(tableArray)
            expect(tableArray.length).to.eql(3)
            cy.wrap(search).get('#searchBox').type('Cierra')
            .get('@tableRow').should('have.length', 1)
        })
    })
})