class AutomationStore_HairCarePage {

    addItemsToCart() {
        globalThis.data.productName.forEach(item => {
            cy.selectItemToCart(item);
        });
    }
}
export default AutomationStore_HairCarePage;