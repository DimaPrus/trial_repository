class AutomationStore_Home_Page {
    hairCareProductsNavigation() {
        cy.visit('/');
        cy.get('#categorymenu ul li').contains('Hair Care').click();
    }
    addItemsToCart() {
        globalThis.data.productName.forEach(item => {
            cy.selectItemToCart(item);
        });
    }
}
export default AutomationStore_Home_Page;