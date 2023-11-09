import { UserModel } from "../Models/UserModel";

export class WebTablesPage {
    salaryInfo = () => cy.get('.rt-table .rt-tr .rt-td:nth-child(5)');
    eachCell = () => cy.get('.rt-table [class="rt-td"]');
    addedRow = () => cy.get('.rt-tbody .rt-tr:not(".-padRow")');
    lastAddedRow = () => cy.get('.rt-tbody .rt-tr:not(".-padRow")').last();
    newRecordButton = () => cy.get('#addNewRecordButton');

    firstName = () => cy.get('#firstName');
    lastName = () => cy.get('#lastName');
    userEmail = () => cy.get('#userEmail');
    salary = () => cy.get('#salary');
    age = () => cy.get('#age');
    department = () => cy.get('#department');
    submitButton = () => cy.get('#submit');





    webTablesPageNavigation() {
        cy.visit('/webtables');
    }

    calculateSalary() {
        const tableDataArray = [];
        let num = 0;

        this.salaryInfo().each(($data, index) => {
            tableDataArray.push(Number($data.text()));
        }).then(() => {
            tableDataArray.map(price => {
                num += Number(price);
            });
            cy.log('The salary sum is: ' + num);
        });
    }

    logData() {
        this.eachCell().each(($data, index) => {
            let tableData = $data.text().trim();
            if (tableData) {
                cy.log($data.text());
            }
        });
    }

    /**
     * @param {UserModel} model
     * @param {string} newParam
     */
    addNewRecord(model, newParam) {
        console.log(newParam);
        this.newRecordButton().click();
        this.firstName().type(model.firstName);
        this.lastName().type(model.lastName);
        this.userEmail().type(model.userEmail);
        this.age().type(model.age.toString());
        this.salary().type(model.salary.toString());
        this.department().type(model.department);
        this.submitButton().click();
    }

    verifySearchResult() {
        let tableArray = [];
        this.addedRow().each(filledRow => {
            tableArray.push(filledRow.text());
        }).then(search => {
            console.log(tableArray);
            expect(tableArray.length).to.eql(3);
            cy.wrap(search).get('#searchBox').type('Cierra');
            this.addedRow().should('have.length', 1);
        });
    }
}

//export default WebTablesPage;