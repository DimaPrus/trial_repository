import { UserData } from "../../support/Data/UserData";
import { WebTablesPage } from "../../support/pageObjects/WebTablesPage";


const userData = new UserData().user;
let webTablesPage;
describe('Web tables suite', () => {

    beforeEach(() => {
        webTablesPage = new WebTablesPage();
        webTablesPage.webTablesPageNavigation();
    });

    it('Verify general sum', () => {
        webTablesPage.calculateSalary();
    });


    it('Log all data except empty cells', () => {
        webTablesPage.logData();
    });

    it('Verify adding a new data into the table', () => {
        //const webTablesPage = new WebTablesPage();
        webTablesPage.addNewRecord(userData);
    });

    it('Verify web table after search result is applied', () => {
        webTablesPage.verifySearchResult();
    });
});