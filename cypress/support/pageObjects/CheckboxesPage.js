class CheckboxesPage {
    selectCheckboxes = () => cy.get('#tree-node-home');
    expandAllCheckboxes = () => cy.get('[title="Expand all"]');
    checkboxType = () => cy.get('input[type="checkbox"]');
    desktopCheckboxes = () => cy.get('ol li').eq(1).as('desktopBlock');
    documentsCheckboxes = () => cy.get('ol li').eq(4).find('[type="checkbox"]');
    resultText = () => cy.get('#result');


    checkboxPageNavigation() {
        cy.visit('/checkbox');
    }

    selectAllCheckboxes() {
        this.selectCheckboxes().check({ force: true });
        this.expandAllCheckboxes().click();
        this.checkboxType().each($checked => {
            cy.wrap($checked).should('be.checked');
        });
    }

    selectSpecificCheckboxes() {
        this.expandAllCheckboxes().click();
        this.desktopCheckboxes().find('[type="checkbox"]').check({ force: true }).then($desktop => {
            cy.wrap($desktop).get('[for="tree-node-desktop"]')
                .should('contain', 'Desktop');
            expect($desktop).to.be.checked;
            this.resultText().should('contain', 'You have selected :desktopnotescommands');
        });
    }

    unselectSpecificCheckboxes() {
        this.expandAllCheckboxes().click();
        this.selectCheckboxes().check({ force: true })
            .should('be.checked');
        this.documentsCheckboxes().then($documentsBlock => {
            cy.wrap($documentsBlock).uncheck({ force: true })
                .should('not.be.checked');
            this.resultText().should('not.contain', 'documents office');
        });
    }
}

export default CheckboxesPage;