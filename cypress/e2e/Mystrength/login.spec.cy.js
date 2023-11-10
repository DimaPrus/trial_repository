/// <reference types="Cypress" />

describe('User Login Tests', () => {
  it.only('user is logged in with proper credentials', () => {
    //cy.userLogin('dmytro.wellness102@teladoc.com', 'Test12345678')
    cy.visit('https://app-intltest.mystrength.me/login/');
    cy.get('#login_email').type('dmytro.wellness24@teladoc.com').wait(3000);
    cy.get('#signup_email_next').click();
    cy.get('#login_password').type('Test123456');
    cy.get('#signup_submit').click().wait(3000);
    for (let i = 0; i < 2; i++) {
      cy.get('[icon-id="mood-icon-4"]').click({ multiple: true }).wait(1000);
    }
    cy.get('.success').click({ force: true });
    cy.get('[data-test="login.mood.skip"]').click();
    // cy.get('a').contains('Skip This').click()
  });
  it('user is logged in with proper credentials and positive mood emoji', () => {
    //cy.userLogin('dmytro.wellness102@teladoc.com', 'Test12345678')
    cy.visit('https://app-intltest.mystrength.me/login/');
    cy.get('#login_email').type('dmytro.wellness102@teladoc.com').wait(3000);
    cy.get('#signup_email_next').click();
    cy.get('#login_password').type('Test123456');
    cy.get('#signup_submit').click().wait(3000);
    cy.location('pathname').should('eq', '/login/mood');
    for (let index = 0; index < 5; index++) {
      cy.log(index);
      cy.get('[icon-id="mood-icon-4"]').click().wait(1000);
    }
    cy.get('.success').click();
    // cy.get('a').contains('Skip This').click()
    cy.location('pathname').should('eq', '/v/');
  });
});