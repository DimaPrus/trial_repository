class MouseActionsPage {
    itemToDrag = () => cy.get('#draggable');
    itemToDrop = () => cy.get('#droppable');
    acceptTab = () => cy.get('#droppableExample-tab-accept');
    acceptableItemToDrag = () => cy.get('#acceptable');

    multipleBlocksTab = () => cy.get('#droppableExample-tab-preventPropogation');
    draggingBox = () => cy.get('#dragBox');
    upperBlockCenter = () => cy.get('#notGreedyDropBox');
    upperBlockOuter = () => cy.get('#notGreedyInnerDropBox');
    bottomBlock = () => cy.get('#greedyDropBoxInner');


    mouseActionsPageNavigation() {
        cy.visit('/droppable');
    }

    dropItem() {
        this.itemToDrag().trigger('mousedown', { which: 1 });
        this.itemToDrop().trigger('mousemove').trigger('mouseup', { force: true });
    }

    dropItemInAcceptTab() {
        this.acceptTab().click();
        this.acceptableItemToDrag().trigger('mousedown', { which: 1 });
        this.itemToDrop().trigger('mousemove', { force: true, which: 1, pageX: 930, pageY: 450 }).trigger('mouseup', { force: true }).wait(2000);
    }

    verifyBackgroundForUpperBlockCenter() {
        this.multipleBlocksTab().click();
        this.draggingBox().trigger('mousedown', { which: 1 });
        this.upperBlockCenter().trigger('mousemove', { force: true, which: 1, pageX: 930, pageY: 420 })
            .should('have.css', 'background-color', 'rgb(143, 188, 143)')
            .trigger('mouseup', { force: true })
            .should('have.css', 'background-color', 'rgb(70, 130, 180)');
    }

    verifyBackgroundForUpperBlockOuter() {
        this.multipleBlocksTab().click();
        this.draggingBox().trigger('mousedown', { which: 1 });
        this.upperBlockOuter().trigger('mousemove', { force: true, which: 1, pageX: 930, pageY: 420 })
            .should('have.css', 'background-color', 'rgb(60, 179, 113)')
            .trigger('mousemove', { force: true, which: 1, pageX: 910, pageY: 500 })
            .trigger('mouseup', { force: true })
            .should('have.css', 'background-color', 'rgb(70, 130, 180)');
    }

    verifyBackgroundForBottomBlock() {
        this.multipleBlocksTab().click();
        this.draggingBox().trigger('mousedown', { which: 1 });
        this.bottomBlock().trigger('mousemove', 'center')
            .should('have.css', 'background-color', 'rgb(143, 188, 143)')
            .trigger('mouseup', { force: true })
            .should('have.css', 'background-color', 'rgb(70, 130, 180)');
    }
}

export default MouseActionsPage;