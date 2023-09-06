class Navigation {
  signUpNavigation() {
    cy.visit("https://appv2-intltest.mystrength.me/login");
    cy.get('[class="link-highlight"]').contains("Create a new account").click();
    cy.get("#accesscode").type("acwellness1").wait(2000);
    cy.get("#welcome_signup_submit").click();
  }
  selectLangAndGender() {
   cy.get('#signup_select_language').select('English (United Kingdom)')
   cy.get('[class="inline-form-fields"]').find('#signup_male').click()
  }
}

export const signUpFlow = new Navigation();
