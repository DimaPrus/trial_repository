import MouseActionsPage from "../../support/pageObjects/MouseActionsPage";
/// <reference types="Cypress" />

describe('Mouse actions suite', () => {
    let mouseActionsPage;

    beforeEach(() => {
        mouseActionsPage = new MouseActionsPage();
        mouseActionsPage.mouseActionsPageNavigation();
    });

    it('Simple droppable test', () => {
        mouseActionsPage.dropItem();
    });

    it('Verify droppable items in Accept tab', () => {
        mouseActionsPage.dropItemInAcceptTab();
    });

    it('Verify background styles for upper center block', () => {
        mouseActionsPage.verifyBackgroundForUpperBlockCenter();
    });

    it('Verify background styles for upper outer block', () => {
        mouseActionsPage.verifyBackgroundForUpperBlockOuter();
    });

    it.only('Verify droppable window styles by dragging on the center box[2, greedy]', () => {
        mouseActionsPage.verifyBackgroundForBottomBlock();
    });
});