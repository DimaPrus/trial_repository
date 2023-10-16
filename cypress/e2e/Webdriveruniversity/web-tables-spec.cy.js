/// <reference types='Cypress' />

describe('Web-tables suite', () => {
    beforeEach(() => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#data-table').invoke('removeAttr', 'target').click({force:true})
    })
    it('Handling web-tables - calculating age', () => {
        const tableData = []
        let totalAgeNumber = 0
        cy.get('#thumbnail-1 tbody td').each(($data, index, $list) => {
            tableData[index] = $data.text()
        }).then(() => {
            for (let i = 0; i < tableData.length; i++) {
                if (Number(tableData[i])){
                    totalAgeNumber += Number(tableData[i])
                }
            }
            cy.log('The total age number is: ' + totalAgeNumber)
        })
    })
    it.only('Handling web-tables - validate age of specific user', () => {
        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($data, index, $list) => {
            let lastName = $data.text()
            if(lastName.includes("Woods")) {
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then((personAge => {
                    expect(personAge.text()).to.equal("80")
                }))
            }
        })
    })
})