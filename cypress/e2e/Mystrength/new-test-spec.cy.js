describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Login-flow-test', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://app-intltest.mystrength.me/login/');
    cy.get('[data-test="login.emailField"]').clear('dmytro.wellness102@teladoc.com');
    cy.get('[data-test="login.emailField"]').type('dmytro.wellness102@teladoc.com');
    cy.get('[data-test="login.nextStepBtn"]').click();
    cy.get('[data-test="login.passwordField"]').clear('T');
    cy.get('[data-test="login.passwordField"]').type('Test123456');
    cy.get('#signup_submit').click();
    cy.get('#button_4 > [data-test="tracker.mood.valueButton"] > svg-icon > .svgicon').click();
    cy.get('#button_3 > [data-test="tracker.mood.valueButton"] > svg-icon > .svgicon > path').click();
    cy.get('#button_2 > [data-test="tracker.mood.valueButton"] > svg-icon > .svgicon > path').click();
    cy.get('#button_1 > [data-test="tracker.mood.valueButton"] > svg-icon > .svgicon').click();
    cy.get('#button_3 > [data-test="tracker.mood.valueButton"] > svg-icon > .svgicon').click();
    cy.get('.success').click();
    cy.get('.section-activities > h2.ng-scope').should('have.text', 'Popular Activities');
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Admin app log in', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://appv2-intltest.mystrength.me/login');
    cy.get('#validated-input-email').type('d1m14.92@gmail.com');
    cy.get('#validated-input-password').clear();
    cy.get('#validated-input-password').type('123456789AAa');
    cy.get('.btn').click();
    cy.get('.destination-list > :nth-child(4) > a').click();
    cy.get('#validated-input-verificationCode').clear();
    cy.pause();
    cy.get('.btn').click();
    cy.get('h1.ng-scope').should('have.text', 'Welcome!');
    cy.get('[href="#organizations"]').click()
    /* ==== End Cypress Studio ==== */
  });

  it.only('Airlines date picker test', () => {
    cy.visit('https://www.aa.com/homePage.do?locale=en_US');
    // cy.contains('label', 'Depart').find('button').then( button => {
    //      cy.wrap('button').click()
    // })
  })
})