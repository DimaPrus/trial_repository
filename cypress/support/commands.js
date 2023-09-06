// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// import '@testing-library/cypress/add-commands'
Cypress.Commands.add("userLogin", (userEmail, password) => {
  cy.visit("https://app-intltest.mystrength.me/login/");
  cy.get("#login_email").type(userEmail).wait(3000);
  cy.get("#signup_email_next").click();
  cy.get("#login_password").type(password);
  cy.get("#signup_submit").click().wait(3000);
  cy.location("pathname").should("eq", "/login/mood");
  cy.get('[data-test="login.mood.skip"]').click();
});

Cypress.Commands.add("userLoginMyStrengthEU", (userEmail, password) => {
  cy.visit("https://app-intltest.mystrength.me/login/").wait(2000);
  cy.get("#login_email").type(userEmail);
  cy.get("#signup_email_next").click().wait(1000);
  cy.get("#login_password").type(password);
  cy.get("#signup_submit").click().wait(3000);
  //   if(cy.location("pathname").should("eq", "/login/assessment").then(assessment => {
  //     cy.wrap(assessment).get('[data-test="login.assessment.skip"]').click()
  //   }));
  for (let index = 0; index < 5; index++) {
    cy.url().then((url) => {
      if(!url.includes("/v")){
        if (url.includes("/login/agreements")) {
          cy.get("#PRIVACY_POLICY").check({ force: true });
          cy.get("#TERMS_AND_CONDITIONS").check({ force: true });
          cy.get('[class="btn checkbox-group-continue"]').click().wait(2000);
        }
  
        if (url.includes("/login/mood")) {
          cy.get('[data-test="login.mood.skip"]').click()
        }
  
        if (url.includes("/login/sleep/calendar")) {
          cy.get('[ng-click="vm.skipCheckin(false)"]').click()
        }
  
        if (url.includes("/login/assessment")){
          cy.get('[data-test="login.assessment.skip"]').click()
        }
        cy.wait(4000);
      }
    });
  }
});
// export {}
