// @ts-ignore
Cypress.Commands.add("xboxLogin", (username, password) => {
    cy.visit('https://www.xboxachievements.com/');
    cy.get('.login__btn').first().click();
    // @ts-ignore
    cy.get('input[type="text"]').last().type(username);
    cy.get('input[type="password"]').last().type(password);
    cy.get('#elSignIn_submit').click();
});